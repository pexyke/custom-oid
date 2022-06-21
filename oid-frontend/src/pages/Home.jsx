import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { oidApi } from "../api/oidApi";
import { useSearchParams } from "react-router-dom";

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [ error, setError ] = useState(null)

  const api = oidApi()

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ client, setClient ] = useState(null);
  const [ redirectUri, setRedirectUri ] = useState(null);

  const login = async () => {
    const response = await api.post("/user/login", {
      username, password, client, redirectUri
    })
    if (!response) return alert("Network error!")
    if (response.status !== 200) return alert("Error!")
    const code = response.data.code
    window.location.href = redirectUri + "?code=" + code
  }

  const signup = async () => {
    const response = await api.post("/user/signup", {
      username, password
    })
    if (!response) return alert("Network error!")
    if (response.status !== 200) return alert("Error!")
    alert("Success!")
    setUsername("")
    setPassword("")
  }

  useEffect(() => {
    const _client = searchParams.get("client_id")
    const _redirectUri = searchParams.get("redirect_uri")
    if (!_client) {
      return setError("Missing params - client_id")
    }
    if (!_redirectUri) {
      return setError("Missing params - redirect_uri")
    }
    setClient(_client)
    setRedirectUri(_redirectUri)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {
        error && <div>{error}</div>
      }
      {
        !error && (
          <div>
            <input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} value={username}  />
            <input placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} value={password}  />
            <button onClick={login}>Login</button>
            <button onClick={signup}>Signup</button>
          </div>
        )
      }
    </div>
  );
};

export default Home;
