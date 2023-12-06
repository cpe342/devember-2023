import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props;
    const disabled = score != undefined;
    const ruleRowClass = `RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`
    return (
      <tr className={ruleRowClass} onClick={disabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;