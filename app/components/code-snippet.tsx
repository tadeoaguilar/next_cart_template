type Params = {
 title:String,
 code :String
}


export const CodeSnippet = (params: Params) => (
    <div className="code-snippet">
      <span className="code-snippet__title">{params.title}</span>
      <div className="code-snippet__container">
        <div className="code-snippet__wrapper">
          <pre className="code-snippet__body">{params.code}</pre>
        </div>
      </div>
    </div>
  );