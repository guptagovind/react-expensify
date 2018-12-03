import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      description: props.expense?props.expense.description:'',
      createdAt: props.expense?moment(props.expense.createdAt):moment(),
      calenderFocus:false,
      amount: props.expense? (props.expense.amount/100).toString():'',
      note: props.expense?props.expense.note:'',
      error:''
    }
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({
        createdAt
      }))
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({
      calenderFocus:focused
    }))
  };

  submit =(e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({
        error:'Please provide description and amount'
      }))
    }else{
      this.setState(()=>({
        error:''
      }));
      this.props.onSubmit({
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
      });
    }
  };

  render() {
    return (
        <form className="form" onSubmit={this.submit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <div>
            <button className="button">Save Expense</button>
          </div>

        </form>
    );
  }
}
