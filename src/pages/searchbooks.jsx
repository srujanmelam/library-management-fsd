import React, { Component } from 'react'

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],
      search: '',
    };
  }
  componentDidMount() {
    fetch('/book')
      .then(res => res.json())
      .then(book => this.setState({book}, () => console.log('teacheratn fetched...', book)));

      // setInterval(() => {
      //   this.refreshh()
      // }, 10000);
  }

  renderCountry = d => {
    const { search } = this.state;
    var code = d.Name.toLowerCase();
    return (
      <div>
      
          <table class="table table-hover">
    <thead>
      <tr>
        <th>Book Id</th>
        <th>Book Category</th>
        <th>Book Title</th>
        <th>Book Author</th>
        <th>Book Price</th>
      </tr>
    </thead>
    <tbody>
         <tr>
           <td>{d.BookId}</td>
           <td>{d.BookCategory} </td> 
           <td>{d.Booktitle}</td>
           <td>{d.Bookauthor}</td>
           <td>{d.Bookprice}</td>
         </tr>
    </tbody>
  </table>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };
  
    render() {
     const { search } = this.state;
     const filteredCountries = this.state.book.filter(country => {
      return country.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
       });
        return (
            <div className="container"> <h2>&nbsp;</h2>
                <input class="form-control col-sm-2" type="text"  onChange={this.onchange} placeholder="Search Books"/> <h2>&nbsp;</h2>
                <h1 >Your Searched Book</h1>
                <table class="table table-hover">
    <thead>
      <tr>
      <th>Book Id</th>
        <th>Book Category</th>
        <th>Book Title</th>
        <th>Book Author</th>
        <th>Book Price</th>
      </tr>
    </thead>
    <tbody>
    {filteredCountries.map(d => {
           if(this.state.search !== '')   
            return (
              <tr>
           <td>{d.BookId}</td>
           <td>{d.BookCategory} </td> 
           <td>{d.Booktitle}</td>
           <td>{d.Bookauthor}</td>
           <td>{d.Bookprice}</td>
               </tr>
                )
              })}
         
    </tbody>
  </table>
               
               </div>
        )
    }
}

export default Search