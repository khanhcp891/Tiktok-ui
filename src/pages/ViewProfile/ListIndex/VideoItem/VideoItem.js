import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div>
            <div className={cx('liked-video')}>
                <video
                    className={cx('video')}
                    src="https://v16-webapp.tiktok.com/8bbc7714e1d453f3252b97f2b69ba31d/63807d0a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ce9d7f70bce6410bbee0f559c9f67b10/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5344&bt=2672&cs=0&ds=3&ft=4b~OyMRh8Zmo0bwDp64jVIuUPpWrKsdm&mime_type=video_mp4&qs=0&rc=OjlpOGg7ODhlOTM0ODwzNkBpM2g6OTY6ZnJyZjMzZjgzM0AyYTYuLTMwXjIxYzI0MDA2YSNfamdjcjRnMGRgLS1kL2Nzcw%3D%3D&l=20221125022953010245242117235C7BD6&btag=80000"
                />
                <video
                    className={cx('video')}
                    src="https://v16-webapp.tiktok.com/8cad597e53d920e0346f30288b0fc530/6380a29a/video/tos/alisg/tos-alisg-pve-0037c001/be1ecbcdfecf4aad938a2916cb743cca/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2590&bt=1295&cs=0&ds=3&ft=4b~OyMRh8Zmo06S~p64jVPiUPpWrKsdm&mime_type=video_mp4&qs=0&rc=NzY8aTc4NztkNWg5NTRkN0BpM246ZDY6ZmY5ZjMzODczNEA1LmM0MDExNi8xXzUwMTIyYSNlYmUzcjRfbWZgLS1kMS1zcw%3D%3D&l=202211250510060102452480040F04F415&btag=80000"
                />
                {/* <a href="" /> */}
            </div>
            <div className={cx('liked-title')}>
                <Link className={cx('link-video')}>
                    <div className={cx('title')}>
                        <span>noi dung video==</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default VideoItem;
