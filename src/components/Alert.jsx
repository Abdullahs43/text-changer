const Alert = (props) => {

  const capatilize = (word) => {

    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
DEV1 
DEV2
Dev3
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatilize(props.alert.type)}:</strong> {props.alert.message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>);
}

export default Alert;
