import React from 'react'

const CoinDetailsComponent = ({ coin }) => {
    if (!coin.id)
        return

    return (
        <div className='container'>
            <div className="row my-2">
                <div className="col-12">
                    <h3>Details of   {coin.name} ({coin.symbol})  <img src={coin.image.small} alt="coin_image" className='my-3' /></h3>


                </div>
            </div>

            <div className="row ">
                <div className="col-12 col-md-6 ">

                    <div>
                        <h5>
                            Market Cap Rank:
                            <span className='ms-2'>
                                {coin.market_cap_rank}
                            </span>
                        </h5>
                    </div>


                    <div>
                        <h5>
                            Market Cap:
                            <span className='ms-2'>
                                {coin.market_data.market_cap.usd.toLocaleString()}
                            </span>
                            <span className='ms-2 badge bg-success'>
                                {coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%
                            </span>
                        </h5>
                    </div>


                    <div>
                        <h5>
                            Current Price:
                            <span className='ms-2'>
                                {coin.market_data.current_price.usd.toLocaleString()}$
                            </span>
                        </h5>
                    </div>

                </div>
                <div className="col-12 col-md-6">




                    <div className='table-responsive'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">24h</th>
                                    <th scope="col">7d</th>
                                    <th scope="col">30d</th>
                                    <th scope="col">1y</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >

                                    <td>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                                    <td>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                                    <td>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</td>
                                    <td>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</td>

                                </tr>


                            </tbody>
                        </table>
                    </div>




                </div>
            </div>

            <div className="row coin-details-row mt-2">
                <div className="col-12 col-md-6">

                    <div>
                        <h5>
                            Low 24h:
                            <span className='ms-2'>
                                {coin.market_data.low_24h.usd.toLocaleString()}
                            </span>
                        </h5>
                    </div>
                    <div>
                        <h5>
                            High 24h:
                            <span className='ms-2'>
                                {coin.market_data.high_24h.usd.toLocaleString()}
                            </span>
                        </h5>
                    </div>

                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h5>
                            Total Supply:
                            <span className='ms-2'>
                                {coin.market_data.total_supply.toLocaleString()}
                            </span>
                        </h5>
                    </div>
                    <div>
                        <h5>
                            Circulating Supply:
                            <span className='ms-2'>
                                {coin.market_data.circulating_supply.toLocaleString()}
                            </span>
                        </h5>
                    </div>
                </div>

            </div>

            <div className="row coin-details-row my-2">
                <div className="col-12">
                    <p dangerouslySetInnerHTML={
                        { __html: coin.description.en }
                    }>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default CoinDetailsComponent





//
//
//
//

// 