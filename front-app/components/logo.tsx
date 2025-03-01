const types: any = {
  header: {
    width: 250,
    height: 174,
  },
  sidebar: {
    width: 150,
    height: 120,
  }
}

const Logo = ({ type = 'header' }: { type: string }) => {
  return (
    <img
      src={'/images/logo.png'}
      alt="logo"
      width={types[type].width}
      height={types[type].height}
    />
  );
};

export default Logo;
