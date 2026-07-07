const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-slate-900 border-2 border-gray-200 hover:border-slate-900 hover:-translate-y-0.5',
    outline: 'border-2 border-gray-300 hover:border-slate-900 hover:bg-slate-50',
    ghost: 'hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;