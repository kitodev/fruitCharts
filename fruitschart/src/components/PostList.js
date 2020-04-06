import React, { Component } from 'react'
import data from '../data/proba_6.json';

class PostList extends Component {
  render() {
		return (
            <div>
                {
					data.apple_prices.map((appleprices, i) => {
						return (
							<div key={i}>
								<div>
                <h5>{appleprices.id}</h5>
                    <span>{appleprices.value}</span>
                    <span>{appleprices.date}</span>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 

export default PostList;
