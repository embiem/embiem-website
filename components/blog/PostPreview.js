import formatDistance from "date-fns/formatDistance";
import * as colors from "../../utils/colors";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.rotation = Math.random() * 5 - 2.5;
  }

  render() {
    const { title, description, date } = this.props;
    return (
      <div className="post-preview" style={this.style}>
        <h3 className="title">{title}</h3>
        <span className="date">
          {formatDistance(new Date(date), new Date(), { addSuffix: true })}
        </span>
        <p className="description">{description}</p>
        <style jsx>{`
          .post-preview {
            background-color: ${colors.white};
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
            padding: 8px 12px;
            transform: rotateZ(${this.rotation}deg);
            box-shadow: rgba(0, 0, 0, 0.03) 4px 4px 8px inset;
            transition: all 0.3s ease-out;
          }

          .post-preview:hover {
            background-color: ${colors.background};
            transform: rotateZ(0deg);
            box-shadow: rgba(0, 0, 0, 0.03) 4px 4px 8px;
          }

          .title {
            margin-bottom: 4px;
          }

          .date {
            font-size: 12px;
          }
        `}</style>
      </div>
    );
  }
}
