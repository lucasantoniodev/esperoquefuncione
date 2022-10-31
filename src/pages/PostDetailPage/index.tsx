import * as S from "../PostDetailPage/style/PostDetailPageStyle";
import { useParams, Link } from "react-router-dom";
import { getPostService } from "../../services/getPostService";
import { RotatingLines } from "react-loader-spinner";
import { queryClient } from "../../QueryProvider";

export const PostDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = getPostService(id!);

  const sDate = new Date(data?.sightingDate!).toLocaleDateString();

  return (
    <S.PostDetailPageStyle>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="32"
          visible={true}
        />
      )}
      {!isLoading && (
        <>
          <S.PostDetailPageContent>
            <img src={data?.img} alt={data?.name!} />
            <article>
              <div>
                <h2>{data?.name}</h2>
                <h5>{data?.scientificName}</h5>
              </div>
              <p>{data?.observation}</p>
              <div>
                <h3>Informações do Avistamento:</h3>
                <h4>
                  Local de Avistamento:
                  <span> {data?.sighting}</span>
                </h4>
                <h4>
                  Data de Avistamento:
                  <span> {sDate}</span>
                </h4>
                <h4>
                  Hora do Avisatamento:
                  <span> {data?.sightingHour}</span>
                </h4>
              </div>
            </article>
          </S.PostDetailPageContent>

          <Link to="/" onClick={() => queryClient.removeQueries(["post"])}>
            Voltar
          </Link>
        </>
      )}
    </S.PostDetailPageStyle>
  );
};
