const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Icon = require('../icon/index.jsx');

const ExperienceBlock = (props) => {
    const { href, position, company, time, location, icon, techList, children } = props;
    return (
        <div styleName='experience-block'>
            <a href={href} styleName='header' className='clear-fix'>
                <div styleName='desc'>
                    <p styleName='title'><span className='bold-text'>{company}</span> | <span styleName='position' className='med-text'>{position}</span></p>
                    <p styleName='subtitle'>{time} | {location}</p>
                    <p styleName='tech' className='med-text'>{techList.join(', ')}</p>
                </div>
                <Icon className={styles['icon']} icon={icon} />
            </a>
            <ul styleName='content'>
                {children}
            </ul>
        </div>
    );
};

ExperienceBlock.displayName = 'ExperienceBlock';
ExperienceBlock.propTypes = {
    href: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    company: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    techList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(ExperienceBlock, styles);