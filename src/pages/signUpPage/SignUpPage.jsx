import ImageBanner from "../../components/register/imageBanner/ImageBanner"
import "./SignUpPage.css"
import SignUp from "../../components/register/sign-up/SignUp"
import Notifications from "../../components/common/notifications/notifications"

const SignUpPage = () => {
  return (
    <main>
      <Notifications/>
      <ImageBanner/>
      <SignUp/>
    </main>
  )
}

export default SignUpPage