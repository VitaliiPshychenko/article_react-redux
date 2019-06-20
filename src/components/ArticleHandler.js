import { connect } from "react-redux";
import Article from "./Article";
import { load } from "../redux/actions";

function mapStateToProps(state) {
  return {
    articleRequested: state.requested,
    articleTitle: state.title,
    articleAuthor: state.author
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: () => dispatch(load())
  };
}

export const ArticleHandler = connect(mapStateToProps, mapDispatchToProps)(Article);