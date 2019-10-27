import * as React from "react";
import * as s from "./About.scss";
import avatar from "static/img/avatar.jpg";

export class About extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <img className={s.img} src={avatar} />
        <section>
        <p>
          Эти страницы не несут никакого смысла, они созданы, для того, чтобы протестировать мою "базовую" сборку webpack.
        </p>
        <p>Этот конфиг собирает:</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Scss(css-modules)</li>
          <li>jpg/png/svg</li>
        </ul>
        </section>
      </div>
    );
  }
}
