import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirect(url, time) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(url);
    }, time);
  }, []);
}
