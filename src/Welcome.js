import React from 'react';
import PropTypes from 'prop-types';

// React.component - מחלקה של ריאקט, מחלקת האב לכל הקומפוננטות, כל קומפוננטת מחלקה חייבת לירש ממנה
class Welcome extends React.Component {

  constructor() {
    super();
    console.log('In Welcome constructor');
  }

  render() {
    console.log('in welcome render');
    // במחלקה, נוסף משתנה חדש, שיושב על ה this
    // שנקרא props
    // הוא מכיל את כל המשתנים שנשלחו לקומפוננטה בתור מאפיינים
    return (<div>ברוכה הבאה {this.props.name} </div>);
  }
}

export default Welcome;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
}

// ערך ברירת מחדל
Welcome.defaultProps = {
  name: 'ABC'
}



// מבחינת פונקציונליות שתי הצורות זהות לחלוטין
// function Welcome() {
//   return (<div>Welcome!</div>);
// }