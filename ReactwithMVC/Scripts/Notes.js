

class ContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {serverMessage : []};
  }

componentWillUnmount() {
      this.mounted = false;
  }

  componentDidMount (){
    //fetch data from server
  this.mounted = true;
    $.getJSON('/Notes/GetNotes', function(result){
    if(this.mounted){
    console.log(result);
    this.setState({
    serverMessage : result
    });

    }
    }.bind(this));
    }

    componentWillUpdate(nextProps, nextState) {
    console.log("Entered will update");
    console.log(nextProps);
    console.log(nextState);
    this.state.serverMessage = nextState;
    console.log(this.state.serverMessage);
    
    }

    render(){
    console.log("Reached container");

    return(
    <div>
        <h1 align="center"> Welcome to Notes App</h1>
        <HeaderComponent title="Amruta notes" />
        <NoteList serverMessage={this.state.serverMessage} />

        <span>

        </span>
    </div>
    );
    }
    }

    class HeaderComponent extends React.Component {
    render() {
    console.log("Reached header");
    return(
    <h1> {this.props.title} </h1>
    );
    }
    }

    class NoteList extends React.Component {
    render() {
    var testServer = []
    //var mockServer = this.props.serverMessage
    console.log("Reached TestComponent", this.props.serverMessage);
    if(this.props.serverMessage != null)
    {
    console.log("Test");
    testServer = this.props.serverMessage.map(function(object) {
    console.log(object);
    return (
    <Note name={object.Name} key={object.Id} />
    );
    })
    }

    return(
    <div>
        {testServer}
    </div>

    );

    }
    }


    class Note extends React.Component {
    render() {
    console.log("Reached note");
    return(
    <div id="NotesContainer">
        <label> {this.props.name} </label>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    );
    }
    }

    ReactDOM.render(
    <ContainerComponent />,
    document.getElementById("NotesContainer"));