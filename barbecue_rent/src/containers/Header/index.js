import React from 'react';

import {
  NavLink,
} from 'react-router-dom'

// import './style.css'

const Header = () => {
  const { t } = useTranslation('common')
  return (
    <div className="header">
        TESTE
    </div>
  )
}

export default NavLink(Header);