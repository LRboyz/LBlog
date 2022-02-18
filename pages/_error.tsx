const Error404 = () => {
  return <div> 404 Page NotFound</div>
}

const ServerError = ({ statusCode }) => {
  return <div>Server Error ! 服务端接口错误！</div>
}

function Error({ statusCode }) {
  if (!statusCode) {
    return <p>An Error occurred on Client </p>
  }
  if (statusCode === 404) {
    return <Error404 />
  }
  return <ServerError statusCode={404} />
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
