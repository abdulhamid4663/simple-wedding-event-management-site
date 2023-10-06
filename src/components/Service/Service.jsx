import PropTypes from 'prop-types';

const Service = ({ service }) => {
    const { id, name, image, description } = service;
    return (
        <div className="card bg-white p-6">
            <figure>
                <img src={image} alt={`image of ${name}`} className="w-14" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}

export default Service;