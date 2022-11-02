import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import video1 from './../../videos/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
// import ReactPlayer from 'react-player';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    // const handleVolumeChange = () => {
    //     videoRef.current.volume();
    // };

    // const volumeAdd = () => videoRef.current.volume() + 0.1;

    // const volumeSub = () => videoRef.current.volume() - 0.1;

    return (
        <div className={cx('video-item')}>
            <div className={cx('video-action')}>
                <video
                    ref={videoRef}
                    className={cx('video')}
                    src={data.popular_video.file_url}
                    // url="https://v16-webapp.tiktok.com/c8e03c74ae9de64cde0cb97aa193fff9/6357917e/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2d86b98ec38b41568d3750cf9d4a5205/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2690&bt=1345&cs=0&ds=3&ft=6-LrVjqM9wUxRDq3NN6~OyXq3bgIHCfxte4cZgBgIRkSgl&mime_type=video_mp4&qs=0&rc=aWU7aTg7Ojw8Z2Q3ODM3M0BpanBpNDs6Zmw0ZzMzZjgzM0BiMzI1XmFhNi0xYl80YV4uYSNpX3JicjRfYjZgLS1kL2Nzcw%3D%3D&l=202210250134120102450152050C19BB8C&btag=80000"
                />
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>

            {/* <button onClick={volumeAdd}>Vol+</button>
            <button onClick={volumeSub}>Vol-</button> */}

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
