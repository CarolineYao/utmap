import '../styles/MapPage.css';
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class  Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
    }
  }
handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  
}
render(){
  const { selected } = this.state.selectedOption;
  const value = selected && selected.value;

  return (
    <Select
      name="form-field-name"
      value={value}
      onChange={this.handleChange}
      options={[
        {value: "AB", label: "AB", },
        {value: "AD", label: "AD", },
        {value: "AH", label: "AH", },
        {value: "AN", label: "AN", },
        {value: "AP", label: "AP", },
        
        {value: "BA", label: "BA", },
        {value: "BC", label: "BC", },
        {value: "BF", label: "BF", },
        {value: "BI", label: "BI", },
        {value: "BL", label: "BL", },
        {value: "BN", label: "BN", },
        {value: "BR", label: "BR", },
        {value: "BS", label: "BS", },
        {value: "BT", label: "BT", },
        {value: "BW", label: "BW", },

        {value: "CA", label: "CA", },
        {value: "CB", label: "CB", },
        {value: "CE", label: "CE", },
        {value: "CG", label: "CG", },
        {value: "CH", label: "CH", },
        {value: "CM", label: "CM", },
        {value: "CN", label: "CN", },
        {value: "CO", label: "CO", },
        {value: "CR", label: "CR", },
        {value: "CS", label: "CS", },
        {value: "CU", label: "CU", },
        {value: "CX", label: "CX", },

        {value: "DA", label: "DA", },
        {value: "DC", label: "DC", },
        {value: "DN", label: "DN", },
        {value: "DR", label: "DR", },

        {value: "EA", label: "EA", },
        {value: "EH", label: "EH", },
        {value: "EJ", label: "EJ", },
        {value: "EM", label: "EM", },
        {value: "EP", label: "EP", },
        {value: "ER", label: "ER", },
        {value: "ES", label: "ES", },
        {value: "EX", label: "EX", },

        {value: "FA", label: "FA", },
        {value: "FC", label: "FC", },
        {value: "FE", label: "FE", },
        {value: "FG", label: "FG", },
        {value: "FH", label: "FH", },
        {value: "FI", label: "FI", },

        {value: "GA", label: "GA", },
        {value: "GB", label: "GB", },
        {value: "GC", label: "GC", },
        {value: "GD", label: "GD", },
        {value: "GE", label: "GE", },
        {value: "GI", label: "GI", },
        {value: "GM", label: "GM", },
        {value: "GO", label: "GO", },
        {value: "GR", label: "GR", },
        {value: "GS", label: "GS", },
        {value: "GU", label: "GU", },

        {value: "HA", label: "HA", },
        {value: "HH", label: "HH", },
        {value: "HI", label: "HI", },
        {value: "HS", label: "HS", },
        {value: "HU", label: "HU", },

        {value: "IA", label: "IA", },
        {value: "IN", label: "IN", },
        {value: "IR", label: "IR", },
        {value: "IS", label: "IS", },

        {value: "JH", label: "JH", },
        {value: "JP", label: "JP", },

        {value: "KL", label: "KL", },
        {value: "KP", label: "KP", },
        {value: "KS", label: "KS", },
        {value: "KX", label: "KX", },

        {value: "LA", label: "LA", },
        {value: "LB", label: "LB", },
        {value: "LC", label: "LC", },
        {value: "LG", label: "LG", },
        {value: "LI", label: "LI", },
        {value: "LM", label: "LM", },
        {value: "LW", label: "LW", },

        {value: "M2", label: "M2", },
        {value: "MA", label: "MA", },
        {value: "MB", label: "MB", },
        {value: "MC", label: "MC", },
        {value: "ME", label: "ME", },
        {value: "MG", label: "MG", },
        {value: "MK", label: "MK", },
        {value: "ML", label: "ML", },
        {value: "MM", label: "MM", },
        {value: "MO", label: "MO", },
        {value: "MP", label: "MP", },
        {value: "MR", label: "MR", },
        {value: "MS", label: "MS", },
        {value: "MU", label: "MU", },

        {value: "NB", label: "NB", },
        {value: "NC", label: "NC", },
        {value: "NF", label: "NF", },
        {value: "NL", label: "NL", },
        {value: "NR", label: "NR", },

        {value: "OA", label: "OA", },
        {value: "OH", label: "OH", },
        {value: "OI", label: "OI", },

        {value: "PB", label: "PB", },
        {value: "PG", label: "PG", },
        {value: "PI", label: "PI", },
        {value: "PR", label: "PR", },
        {value: "PT", label: "PT", },

        {value: "RB", label: "RB", },
        {value: "RG", label: "RG", },
        {value: "RJ", label: "RJ", },
        {value: "RL", label: "RL", },
        {value: "RM", label: "RM", },
        {value: "RS", label: "RS", },
        {value: "RT", label: "RT", },
        {value: "RU", label: "RU", },
        {value: "RW", label: "RW", },

        {value: "SA", label: "SA", },
        {value: "SB", label: "SB", },
        {value: "SC", label: "SC", },
        {value: "SD", label: "SD", },
        {value: "SF", label: "SF", },
        {value: "SI", label: "SI", },
        {value: "SK", label: "SK", },
        {value: "SM", label: "SM", },
        {value: "SO", label: "SO", },
        {value: "SR", label: "SR", },
        {value: "SS", label: "SS", },
        {value: "SU", label: "SU", },

        {value: "TC", label: "TC", },
        {value: "TF", label: "TF", },
        {value: "TH", label: "TH", },
        {value: "TR", label: "TR", },
        {value: "TT", label: "TT", },

        {value: "UB", label: "UB", },
        {value: "UC", label: "UC", },
        {value: "UP", label: "UP", },

        {value: "VA", label: "VA", },
        {value: "VC", label: "VC", },
        {value: "VI", label: "VI", },
        {value: "VP", label: "VP", },

        {value: "WA", label: "WA", },
        {value: "WB", label: "WB", },
        {value: "WE", label: "WE", },
        {value: "WI", label: "WI", },
        {value: "WO", label: "WO", },
        {value: "WR", label: "WR", },
        {value: "WS", label: "WS", },
        {value: "WT", label: "WT", },
        {value: "WW", label: "WW", },
        {value: "WY", label: "WY", },

        {value: "XG", label: "XG", },
        {value: "ZC", label: "ZC", }
      ]}
    />
  );
}
}


export default Search;
