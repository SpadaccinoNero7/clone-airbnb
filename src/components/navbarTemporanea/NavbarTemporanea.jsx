import { NavLink } from "react-router-dom";
import { ViewModeContext } from "../../context/ViewModeContext";
import { useContext } from "react";
import { useFetch } from "../../customHook/useFetch";

export default function NavbarTemporanea() {
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";
  const { data, loading, error } = useFetch("/file.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <nav>
        {data.map((i) => {
          return (
            <p key={i.id}>
              {i.visible && (
                <NavLink
                  to={`${i.link}`}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : inactiveColor,
                    };
                  }}
                >
                  {i.category}
                </NavLink>
              )}
            </p>
          );
        })}
      </nav>
    </>
  );
}
