import NftChart from '../nftChart/NftChart'

import './nftTopContainer.scss'


const NftTopContainer = ({
    nftStats,
    nftDescribe,
    nftChartLoading,
    nftChart,
}) => {

    function categoriesRender(categories) {
        if (categories) {
            return categories.map((item, index) => {
                return <div key={index}>{item}</div>
            })
        }
        return null
    }

    const renderChart = nftChartLoading ? null : (
        <NftChart nftChart={nftChart} />
    )

    return (
        <div className="nftTopContainer">
            <div className="nftTopContainerInner">
                <div className="nftTopContainerFirst">
                    <div className="nftTopContainerFirstName">
                        <img src={nftDescribe.image} />
                        <h2>{nftDescribe.name}</h2>
                    </div>

                    <div className="nftTopContainerFirstLinks">
                        {nftDescribe.website && (
                            <div className="nftTopContainerFirstLinksWebsite">
                                <a href={nftDescribe.website}>Website</a>
                            </div>
                        )}

                        {nftDescribe.discord && (
                            <div className="nftTopContainerFirstLinksDiscord">
                                <a href={nftDescribe.discord}>Discord</a>
                            </div>
                        )}

                        {nftDescribe.twitter && (
                            <div className="nftTopContainerFirstLinksTwitter">
                                <a href={nftDescribe.twitter}>Twitter</a>
                            </div>
                        )}

                        <div className="nftTopContainerFirstLinksME">
                            <a
                                href={`https://magiceden.io/marketplace/${nftDescribe.symbol}`}
                            >
                                Magic Eden
                            </a>
                        </div>
                    </div>

                    <div className="nftTopContainerFirstTags">
                        <span>Tags</span>
                        <div className="nftTopContainerFirstTagsInner">
                            {categoriesRender(nftDescribe.categories)}
                        </div>
                    </div>
                </div>

                <div className="nftTopContainerSecond">
                    <div className="nftTopContainerSecondInfo">
                        <div className="nftTopContainerSecondInfoPrice nftTopContainerItem">
                            <h3>Mint price</h3>
                            <span>55</span>
                        </div>
                        <div className="nftTopContainerSecondInfoSupply nftTopContainerItem">
                            <h3>Supply</h3>
                            <span>{nftDescribe.totalItems}</span>
                        </div>
                        <div className="nftTopContainerSecondInfoDate nftTopContainerItem">
                            <h3>Mint date</h3>
                            <span>
                                {nftDescribe.createdAt
                                    ? nftDescribe.createdAt.substring(0, 10)
                                    : null}
                            </span>
                        </div>
                    </div>

                    <div className="nftTopContainerLine"></div>

                    <div className="nftTopContainerSecondInfo nftTopContainerSecondInfoBottom">
                        <div className="nftTopContainerSecondInfoFloor nftTopContainerItem">
                            <h3>Floor price</h3>
                            <span>
                                {(nftStats.results.floorPrice / 1e9).toFixed(2)}
                            </span>
                        </div>
                        <div className="nftTopContainerSecondInfoSupplyVolume nftTopContainerItem">
                            <h3>Volume</h3>
                            <span>
                                {(nftStats.results.volumeAll / 1e12).toFixed(
                                    2
                                ) + 'K'}
                            </span>
                        </div>
                        <div className="nftTopContainerSecondInfoDateListed nftTopContainerItem">
                            <h3>Total listed</h3>
                            <span>{nftStats.results.listedCount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chartContainer">{renderChart}</div>
        </div>
    )
}

export default NftTopContainer
