import React from 'react';
import './css/Info.css';
import PuruImage2 from "../../assets/white/2.png";

const Info = () => {

    return (
        <div>
        <div className="info-banner">
           <div className="info-banner-image-container">
                <img className="info-banner-image" src={PuruImage2} alt="puru"></img>
           </div>
           <div className="info-banner-text">
                <h1><span className="info-banner-text-highlight">Information</span></h1>
                <p>Everything you need to know about <span className="pink-text">$PURU</span></p>
           </div>
        </div>
        <div className="info-content-container">
            <h1>Tokenomics</h1>
            <p>This section will explain all there is to know on how the entire system work.</p>
            <h3>Slash Fee</h3>
            <p>A 20% slash fee will be imposed on ALL outbound transfers made by users. This includes:</p>
            <p><strong>1.</strong> Selling at a DEX/Liquidity pool, as you "transfer out" your $PURUs to the liquidity pool, the liquidity pool is also intelligent enough to pay the correct amount after the slash fee is taken.</p>
            <p><strong>2.</strong> Transferring to another wallet or unauthorized contract, so please be careful to keep your $PURU on just one wallet!</p>
            <p><strong>3.</strong> Adding liquidity, yes, PLEASE DO NOT add liquidity for $PURU as transferring to the liquidity pool is counted as an outbound transfer. Liquidity will be added by the devs if required.</p>
            <br></br>
            <p>However, specific addresses are "whitelisted" to transfer or accept $PURUs without getting a slash fee. This includes:</p>
            <p><strong>1.</strong> Recognized liquidity pools will not receive a slash fee when transferring out $PURU to users; thus, buyers do not suffer the slash fee.</p>
            <p><strong>2.</strong> Authorised contracts used on this website, such as the vault's contract, will also bypass the slash fee so that users do not get taxed for creating or claiming a deposit.</p>
            <p><strong>3.</strong> Developers' fund vault is also exempt from the outbound transfer slash fee due to adding liquidity, airdrop events, and paying bounties. All related wallet and contract addresses will be listed on our Discord and Twitter, thus transparent to all users.</p>
            <p>The slash fee is in place to give holders a peace of mind that panic sellers and ruggers have a less than 20% impact on the market and have that slash fee rewarded back to them!</p>

            <h3>Locked Vault</h3>
            <p>$PURU can be staked into the locked vault between 30 to 100 days (only whole days are acceptable such as 31 or 84 days, not 34.5 days). Users who deposit their $PURU will receive an increase in the rating, which is calculated as such:</p>
            <p><strong>Rating</strong> = ( $PURU deposited ) x ( Duration in days )^2 / 100</p>
            <p>Example: Depositing 10 $PURU for 30 days will give you 90 rating (stackable with every deposit made)</p>
            <p>In plain terms, users who choose a longer staking period gain a much higher rating compared to shorter staking periods, while a 100-day cap is also added so that short-term stakers can get a fair share of the rewards pool as well.</p>
            <br></br>
            <p>Users can have unlimited deposits and stack as much rating as they like, as more rating would mean a bigger share in slash fees collected in the reward pool. Your share in the pool is calculated as such:</p>
            <p>Your share = ( Your Total rating ) / ( Total rating of all users ) x 100%</p>
            <p>Example: If your rating is 100 and the total rating of all users is 1000, you own 10% in the reward pool share (excluding the bounty reward and dev cut explained below).</p>
            <br></br>
            <p>As to not impose a force lock on users, there is a forfeit option for any locked deposit, where only 50% of the tokens will be returned to the user while the rest goes into the developer's vault. This is so that if any user accidentally forfeited their deposits, devs can return the tokens to the user upon consideration. Any remaining tokens sent to the dev's vault this way will be used for event rewards or burned.</p>
            <p>Another thing to note is that your rating will be reduced upon claiming your $PURU from a deposit. The reduced amount is the amount you gained from that deposit initially.</p>

            <h3>Exemption quota to slash fee</h3>
            <p>Users who stake their $PURU in the locked vault will receive an exemption quota to slash the fee when they claim their $PURU. The exemption amount is equal to the amount of $PURU they chose to stake, regardless of the duration it was locked for.</p>
            <p>Example: After staking 100 $PURU for 30 days, you will receive an exemption to transfer out 100 $PURU without paying the slash fee. The same goes for someone who staked 100 $PURU for 90 days.</p>
            <p>The exemption quota is flexible and permanent, which can be spent on multiple transfers. On a transfer exceeding the exemption quota, the remaining exemption quota will waiver the correct portion of tokens from the slash fee while taxing the other portion. Thus, there is nothing to worry about. All is fair and square!</p>

            <h3>Bounty Reward and Dev cut</h3>
            <p>0.1% of the reward pool is paid out as a bounty reward for the user who paid the gas fee to execute the reward distribution, and 5% of the reward pool sent to the developer's vault on each distribution instance. These two rewards are calculated and taken out first before the rest being distributed to all users with ratings.</p>

            <h3>Rewards Distribution</h3>
            <p>All rewards distributed upon someone claiming the bounty reward will automatically be airdropped into all entitled user's wallets. No need the extra trouble to claim from the vault or whatsoever! Do take note that these $PURU rewards are still subjected to the slash fee.</p>

            <h3>Credits</h3>
            <p>All users will permanently earn one credit for every rating gained in their lifetime. These credits can be spent in the Credit Shop (Coming Soon). Goodies offered in the Credit Shop would include gacha tickets for PURU NFTs and entitlements on collaborations with other projects. Users can also buy/sell/trade their rare NFTs with other users with $PURU as the main trading currency (slash fee will be exempted, not to worry!)</p>

            <h3>Token Allocation</h3>
            <p>10 million $PURU will be minted on token deployment, and no more can be minted afterward (minter function disabled). 80% of the tokens are allocated for IDO (Initial DEX Offering), while 20% is kept in the developer's vault for future events and project development funds.</p>

            <h3>Project Goals</h3>
            <p>This project is designed to be a long-term project where the profits of long-term holders are cared for and protected. Future projects such as the NFT gacha expansion, PURUSWAP and much more will give additional incentives to the current $PURU holders, aiming to appreciate the price of $PURU. Collaborations with other projects (currently still TBA to not share empty promises) will also allow users to spend their credits for some unique benefits and entitlements.</p>

            <p className="red-text">All critical information ends here.</p>
            <h3>More about the project and the one and only cowoder</h3>
            <p>Hello, I'm pururun, the developer for everything on this project except for the cute PURU arts commissioned from Shino. The storytelling is done by Jax, and not forgetting the support from all the degens in the Freyala Discord Community. I am also a mini dev for Freyala and have since then passionately learned Solidity and somehow made this project possible! No forks and lame copy practices was done for this project, all 100% made from scratch, using Solidity for the contracts and React JS for the website.</p>
            <br></br>
            <p>I chose the Harmony network for my project because the community here is just too friendly! I've never been to a community where users and developers mingle so happily together. This project is done so that everyone can have fun collecting PURUs, enjoy the storytelling and have a laugh that they made st0nks by investing in $PURU.</p>

            <h3>Story behind the PURUs</h3>
            <p>Purus are adorable blob-like creatures that live in Puruland. Every year, the puru king sends them on a long journey in search of gold and wealth. 
            It is said that whenever a puru finds something valuable, it will engulf it’s entirety into its body and bring the item back as a gift. The puru that presents the best gift will then be crowned as the next puru king, and thus sending his subjects onto another year-long journey…</p>
        </div>
        </div>
        

    );
}

export default Info;
