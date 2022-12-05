import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import video1 from './../../videos/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { faVolumeDown, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Slider from './Slider';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const [playing, setPlaying] = useState(false);
    const [percentage, setPercentage] = useState(30);

    const videoRef = useRef();

    const handleClickActionVideo = () => {
        if (playing) {
            // console.log('first', window.scrollY);
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    useEffect(() => {
        videoRef.current.volume = percentage / 100;
    }, [percentage]);

    const handleVolumeChange = () => {
        return videoRef.current.volume;
    };

    const onChange = (e) => {
        setPercentage(e.target.value);
    };

    const renderVolume = (attrs) => {
        return (
            <div>
                <Slider onChange={onChange} percentage={percentage} />
            </div>
        );
    };

    useEffect(() => {
        let options = {
            rootMargin: '0px',
            threshold: [0.75, 0.75],
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (window.matchMedia('(prefers-reducer-motion: reduce)').matches) {
                    videoRef.current.currentTime = 0;
                    console.log('video', videoRef.current.currentTime);
                } else {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                        setPlaying(true);
                    } else {
                        videoRef.current.pause();
                        setPlaying(false);
                    }
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    }, []);

    return (
        <div className={cx('video-item')}>
            <div className={cx('video-action')}>
                <video
                    ref={videoRef}
                    className={cx('video')}
                    id="vid"
                    loop
                    // onClick={handleClickActionVideo}
                    src={data.popular_video.file_url}
                    onVolumeChange={handleVolumeChange}
                />
                <Tippy offset={[70, -30]} interactive delay={[300, 0]} render={renderVolume} placement="top">
                    <div className={cx('volume')}>
                        <FontAwesomeIcon icon={faVolumeDown} />
                    </div>
                </Tippy>
                <div className={cx('pause-play')} onClick={handleClickActionVideo}>
                    {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </div>
            </div>
            {/* <div className={cx('video-action')}>
                <ReactPlayer
                    ref={videoRef}
                    className={cx('video')}
                    muted={true}
                    playing={true}
                    // src={data.popular_video.file_url}
                    // url="https://v16-webapp.tiktok.com/c8e03c74ae9de64cde0cb97aa193fff9/6357917e/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2d86b98ec38b41568d3750cf9d4a5205/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2690&bt=1345&cs=0&ds=3&ft=6-LrVjqM9wUxRDq3NN6~OyXq3bgIHCfxte4cZgBgIRkSgl&mime_type=video_mp4&qs=0&rc=aWU7aTg7Ojw8Z2Q3ODM3M0BpanBpNDs6Zmw0ZzMzZjgzM0BiMzI1XmFhNi0xYl80YV4uYSNpX3JicjRfYjZgLS1kL2Nzcw%3D%3D&l=202210250134120102450152050C19BB8C&btag=80000"
                    url={video1}
                    // url="https://v16-webapp.tiktok.com/f0473cabdc192b72233f386b54e01226/63862bd3/video/tos/useast2a/tos-useast2a-ve-0068c004/owzvvJp4UBwbgIhIdtR9EIPBdodzfQbuQAAGfj/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1516&bt=758&cs=0&ds=3&ft=4b~OyMkQ8Zmo0uV0K64jVp26PpWrKsdm&mime_type=video_mp4&qs=0&rc=Zjo3N2RkZWdlOWc5OWU6OEBpanU2ZWk6ZnZ5ZzMzNzczM0AzMzAvMTNgXy0xLmIwMzA0YSNtLWgtcjRfNWtgLS1kMTZzcw%3D%3D&l=202211290955540102440122140805372F&btag=80000"
                />
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div> */}
            {/* <div className={cx('video-action')}>
                <Player
                    ref={videoRef}
                    className={cx('video')}
                    // src={data.popular_video.file_url}
                    // url="https://v16-webapp.tiktok.com/f0473cabdc192b72233f386b54e01226/63862bd3/video/tos/useast2a/tos-useast2a-ve-0068c004/owzvvJp4UBwbgIhIdtR9EIPBdodzfQbuQAAGfj/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1516&bt=758&cs=0&ds=3&ft=4b~OyMkQ8Zmo0uV0K64jVp26PpWrKsdm&mime_type=video_mp4&qs=0&rc=Zjo3N2RkZWdlOWc5OWU6OEBpanU2ZWk6ZnZ5ZzMzNzczM0AzMzAvMTNgXy0xLmIwMzA0YSNtLWgtcjRfNWtgLS1kMTZzcw%3D%3D&l=202211290955540102440122140805372F&btag=80000"
                >
                    <source src="https://v16-webapp.tiktok.com/f0473cabdc192b72233f386b54e01226/63862bd3/video/tos/useast2a/tos-useast2a-ve-0068c004/owzvvJp4UBwbgIhIdtR9EIPBdodzfQbuQAAGfj/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1516&bt=758&cs=0&ds=3&ft=4b~OyMkQ8Zmo0uV0K64jVp26PpWrKsdm&mime_type=video_mp4&qs=0&rc=Zjo3N2RkZWdlOWc5OWU6OEBpanU2ZWk6ZnZ5ZzMzNzczM0AzMzAvMTNgXy0xLmIwMzA0YSNtLWgtcjRfNWtgLS1kMTZzcw%3D%3D&l=202211290955540102440122140805372F&btag=80000" />
                </Player>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div> */}

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
