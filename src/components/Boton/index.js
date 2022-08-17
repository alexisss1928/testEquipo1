import React from "react";

import { useNavigate, Link } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="button">
        <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
        <br></br>
        <span>¿No tienes una cuenta? </span><Link to="/sign-up">Regístrate aquí.</Link>
      </div>
    </div>
  );
}
