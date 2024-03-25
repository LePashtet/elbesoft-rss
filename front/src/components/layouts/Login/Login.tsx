import { ChipIcon } from "../../ui/ChipIcon"
import './Login.scss'
export const Login=()=>{
  return(
    <main className="login">
      <div className="login-block">
        <h1 className="login-block_text">News + letter</h1>
        <div className="login-block_chips">
          <ChipIcon label="google"/>
          <ChipIcon label="telegram"/>
          </div>
      </div>
    </main>
  )
}