import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import video1 from './../../videos/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function VideoItem() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    const handleVolumeChange = () => {
        videoRef.current.volume();
    };

    return (
        <div className={cx('video-item')}>
            <video
                ref={videoRef}
                className={cx('video')}
                src="https://v16-webapp.tiktok.com/e3966a020a465c70e77e6045a4c4b368/6356547f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/bc192fea7c0e4f5a825315eba817edf9/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5670&bt=2835&cs=0&ds=3&ft=kLO5qy-gZmo0Pq9pBBkVQ06xDiHKJdmC0&mime_type=video_mp4&qs=0&rc=PGk8aTg3Nzs7NDloaTw4O0BpM29vOmU6Zmk0ZzMzZjgzM0AxLTQ1LzA0NTYxMTExLjY0YSNgcjJncjRncjZgLS1kL2Nzcw%3D%3D&l=2022102403013701024502412515A8AAE4&btag=80000"
            />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onVolumeChange={handleVolumeChange}>Volume</button>

            <div className={cx('interactive')}>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                </button>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                </button>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                </button>
            </div>
        </div>
    );
}

export default VideoItem;
