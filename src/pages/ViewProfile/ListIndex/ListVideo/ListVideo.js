import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';

const cx = classNames.bind(styles);

function ListVideo() {
    return (
        <div>
            <div className={cx('post-item-list')}>
                <div className={cx('post-item')}>
                    <div className={cx('post-video')}>
                        hoho
                        {/* <a href="https://v16-webapp.tiktok.com/8bbc7714e1d453f3252b97f2b69ba31d/63807d0a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ce9d7f70bce6410bbee0f559c9f67b10/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5344&bt=2672&cs=0&ds=3&ft=4b~OyMRh8Zmo0bwDp64jVIuUPpWrKsdm&mime_type=video_mp4&qs=0&rc=OjlpOGg7ODhlOTM0ODwzNkBpM2g6OTY6ZnJyZjMzZjgzM0AyYTYuLTMwXjIxYzI0MDA2YSNfamdjcjRnMGRgLS1kL2Nzcw%3D%3D&l=20221125022953010245242117235C7BD6&btag=80000" /> */}
                    </div>
                    <div className={cx('post-title')}>hihihaha</div>
                </div>
            </div>
        </div>
    );
}

export default ListVideo;
