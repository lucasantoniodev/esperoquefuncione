import * as S from "./styles/NavbarStyled";
import { SearchInput } from "../shared/SearchInput";
import { NavLink, Outlet, Link } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import { toast } from "react-toastify";
import Logo from "../../assets/logo.svg";
import { queryClient } from "../../QueryProvider";

const backToTop = () => {
  queryClient.removeQueries(["post"]);
  window.scrollTo(0, 0);
};

export const Header = () => {
  return (
    <>
      <S.HeaderContainer>
        <Link aria-label="Navbar Logo Bird" to="/" onClick={backToTop}>
          <img src={"/logo.svg"} alt="Navbar Logo Bird" />
        </Link>

        <S.Nav>
          <SearchInput />

          <NavLink to="/create">
            <span>+</span>
            <p>Criar</p>
          </NavLink>
        </S.Nav>
        <S.userContainer
          aria-disabled="true"
          onClick={() =>
            toast.success("Ainda não temos essa funcionalidade :)")
          }
        >
          <UserCircle size={42} />
        </S.userContainer>
      </S.HeaderContainer>
      <Outlet />
    </>
  );
};
