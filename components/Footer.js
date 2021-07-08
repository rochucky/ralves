import * as Icon from '@material-ui/icons'

import styles from '../src/styles/footer.scss';

const Footer = (props) => {
  return (

    <div className="footer">
      <div className="contact">
        <div className="title">
          Contato:
        </div>
        <div className="email">
          <Icon.MailOutlined className="icon" /> <a href="mailto:alves.rodrigo31@outlook.com" target="_blank">  alves.rodrigo31@outlook.com</a>
        </div>
        <div className="wpp">
          <Icon.WhatsApp className="icon" /><a href="https://api.whatsapp.com/send?phone=5511979558782" target="_blank">  (11) 9 7955-8782</a>
        </div>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/rodrigo-alves-9185156b/" target="_blank">
          <Icon.LinkedIn className="icon"/>
        </a>
        <a href="https://www.facebook.com/rodrigo.alves.58323431" target="_blank">
          <Icon.Facebook className="icon"/>
        </a>
        <a href="https://www.instagram.com/alvinhochucky" target="_blank">
          <Icon.Instagram className="icon"/>
        </a>
        <a href="https://github.com/rochucky" target="_blank">
          <Icon.GitHub className="icon"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;