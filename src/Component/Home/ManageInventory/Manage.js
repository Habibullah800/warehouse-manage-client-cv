import useProducts from '../../Hooks/useProduct';

import ManageInventory from './ManageInventory';

const Manage = () => {

    const [products] = useProducts();

    return (
        <div>
            {
                products.map(product => <ManageInventory
                    key={product.id}
                    product={product}
                ></ManageInventory>)
            }
        </div>
    );
};

export default Manage;