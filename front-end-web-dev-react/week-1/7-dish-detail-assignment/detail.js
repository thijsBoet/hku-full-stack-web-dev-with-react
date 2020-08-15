import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.alt} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {dish.comments.map(({ comment, author, date, id }) => {
            return (
              <li key={id}>
                <p> {comment} </p>

                <p>
                  --{author}, {new Date(date).toLocaleDateString()}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { dish } = this.props;
    if (this.props.dish !== null) {
      return (
        <React.Fragment>
          {this.renderDish(dish)}
          {this.renderComments(dish)}
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
