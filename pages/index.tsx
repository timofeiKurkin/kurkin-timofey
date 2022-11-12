import Main from "../components/Main";
import {mediaType} from "../types";
import {NextPage} from "next";

const Home: NextPage <{media: mediaType }> = ({media}) => {
  return (
      <Main props={media}/>
  )
}


export default Home