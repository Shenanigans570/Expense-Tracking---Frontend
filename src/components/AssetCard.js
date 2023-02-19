import React from 'react'

const AssetCard = ({ amount, investment, user}) => {
  console.log(user)

  return (
    
        <div className = 'investmentList'>
            <div className = 'investmentCard'>
                {/* <div className='userWhoInvested'>{user}</div> <br/> */}
                <div className='investmentName'>{investment}</div> 
                <div className='investmentAmount'>$ {amount}</div> 
            </div>
        </div>

  )
}

export default AssetCard
