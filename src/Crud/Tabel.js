import React, { Component } from "react";
import { Table } from "react-bootstrap";

class App_Skill extends Component{
  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      DataSkill : [],
      isLoaded  : false,
      
      skillID   : '',
      skillName : '',
    }
  }

  componentDidMount(){
    // this.fetchData();
    fetch('https://localhost:5001/api/Skill/GetSkills')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded     : true,
        DataSkill    : json,
      })
    })
  }
  
render(){
  var {isLoaded, DataSkill} = this.state;

  if(!isLoaded){
    return<div>Loading..</div>;
  }

  else{
    return (
      <div className="App">
        <ul>
        {DataSkill.map(item => (
          <li key={item.id}>
            Id:{item.skillID} | Name:{item.skillName}
          </li>
        ))};
        </ul>
      </div>
    );
  }
}

}

const Tabel = ({ Skill, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Skill</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {Skills.map((Skill, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{Skill.Skill}</td>
              <td>{Skill.Level}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editData(Skill.id)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(Skill.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </Table>
  );
};

export default Tabel;
