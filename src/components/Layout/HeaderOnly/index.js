import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    console.log('Children: ', children);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
