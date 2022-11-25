type ShowMoreButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ShowMoreButtonComponent({onClick}: ShowMoreButtonProps): JSX.Element {

  return (
    <div className="catalog__more">
      <button onClick={onClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButtonComponent;
