import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const navItems = [
  { label: "Drag and Drop (react-dnd)", path: "/react-dnd" },
  {
    label: "Drag and Drop (react-beautiful-dnd)",
    path: "/react-beautiful-dnd",
  },
];

const Container = styled.div``;

const Sidebar = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavButton = styled.button<{ $isActive: boolean }>`
  padding: 6px 20px;
  border-radius: 100px;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? "#00CCB4" : "#fff")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#03918F")};
  border: ${({ $isActive }) => ($isActive ? "none" : "1px solid #03918F")};
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px 0;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClick = (pathName: string) => {
    navigate(pathName);
  };

  return (
    <Container>
      <Sidebar>
        {navItems.map((item) => (
          <NavButton
            key={item.path}
            $isActive={location.pathname === item.path}
            onClick={() => handleOnClick(item.path)}
          >
            {item.label}
          </NavButton>
        ))}
      </Sidebar>
      <MainContent>{props.children}</MainContent>
    </Container>
  );
};

export default Layout;
