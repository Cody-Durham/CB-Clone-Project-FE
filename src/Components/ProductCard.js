import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ pFam, imgBaseURL}) => {
	// console.log("ProductCard product prop:", pFam)
    
    //////////////////////////////
    // * pFam object contents   //
    //////////////////////////////
        // audience:    
        // category:   
        // group:       
        // price:       
        // price_sale:  
        // image0:     
        // image1:      
        // alt0:       
        // alt1:        
        // label:      


    return (
		<div className="card-container">
			<div className="card-image-container">
				<img
                    onMouseOver={e => e.target.setAttribute('src', imgBaseURL + pFam.image1)}
                    onMouseOut ={e => e.target.setAttribute('src',imgBaseURL + pFam.image0)}
					alt={pFam.alt0}
					className="card-image"
					src={imgBaseURL + pFam.image0}
				/>
			</div>
			<div id="card-info">
				<div id="card-product-name">
					<article>{pFam.label}</article>
					<article>{pFam.price}</article>
					<div id="card-circles-container">
						<span id="card-circles-1">
							<GiPlainCircle />
						</span>
						<span id="card-circles-2">
							<GiPlainCircle />
						</span>
						<span id="card-circles-3">
							<GiPlainCircle />
						</span>
					</div>
				</div>
				<div id="card-favorite-white">
					<MdFavorite />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
