import { Edit2, Trash2, User, Phone } from "lucide-react";

export default function AddressCard({ address, isSelected, onSelect, onEdit, onDelete }) {
  
  if (!address) return null;

  return (
    <div
      onClick={() => onSelect(address.id)}
      className={`relative w-full p-4 rounded-lg border transition-all cursor-pointer min-h-[160px] flex flex-col justify-between group
        ${isSelected 
          ? "border-pictonBlue bg-white shadow-md ring-1 ring-pictonBlue"
          : "border-silver bg-white hover:border-pictonBlue"
        }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-x-2">
          <div className={`w-4 h-4 rounded-full border flex items-center justify-center
            ${isSelected ? "border-pictonBlue" : "border-silver"}`}>
            {isSelected && <div className="w-2 h-2 rounded-full bg-pictonBlue"></div>}
          </div>
          <span className="font-semibold text-ebonyClay">{address.title}</span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(address);
          }}
          className="text-xs font-semibold text-pictonBlue hover:text-ebonyClay underline flex items-center gap-1 cursor-pointer"
        >
          <Edit2 size={12} /> Düzenle
        </button>
      </div>

      <div className="text-sm text-ebonyClay space-y-2 flex-grow">
        <div className="flex items-center gap-4 bg-white/50 p-1 rounded">
          <div className="flex items-center gap-2 font-medium text-pictonBlue">
             <User size={14} className="text-pictonBlue"/>
             {address.name} {address.surname}
          </div>
          <div className="flex items-center gap-2">
             <Phone size={14} className="text-pictonBlue"/>
             {address.phone}
          </div>
        </div>
        
        <div className="p-1 line-clamp-2">
          {address.neighborhood}, {address.address} | {address.district}/{address.city.toUpperCase()}
        </div>
      </div>
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
                e.stopPropagation();
                onDelete(address.id);
            }}
            className="text-silver hover:text-ebonyClay p-1 rounded bg-white/70"
          >
              <Trash2 size={16} />
          </button>
      </div>
    </div>
  );
}