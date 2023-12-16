import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const [errMsg, setErrmsg] = useState("");
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        console.log(param.id);
        const url = `/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        setErrmsg(error.response.data.message);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <h1 className="flex grow items-center mx-auto font-bold text-4xl tracking-wider mb-40">
          Email verified successfully
        </h1>
      ) : (
        <h1 className="flex grow items-center mx-auto font-bold text-4xl tracking-wider mb-40 ">
          {errMsg}
        </h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
