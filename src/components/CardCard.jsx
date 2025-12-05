import React from "react";
import { Edit2, Trash2, CreditCard, Banknote } from "lucide-react";

export default function CardCard({ card, isSelected, onSelect, onEdit, onDelete }) {
  
  if (!card) return null;
  
  const lastFourDigits = card.card_no.slice(-4);
  const getCardType = (cardNumber) => {
    if (cardNumber.startsWith('4')) return "Visa";
    if (cardNumber.startsWith('5')) return "MasterCard";
    return "Kart";
  }

  return (
    <div
      onClick={() => onSelect(card.id)}
      className={`relative w-full p-4 rounded-lg border transition-all cursor-pointer min-h-[160px] flex flex-col justify-between group
        ${isSelected 
          ? "border-pictonBlue bg-white shadow-md ring-1 ring-pictonBlue" // Seçili stil
          : "border-mercury bg-white hover:border-pictonBlue" // Normal stil
        }`}
    >
  
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-x-2">
        
          <div className={`w-4 h-4 rounded-full border flex items-center justify-center
            ${isSelected ? "border-pictonBlue" : "border-silver"}`}>
            {isSelected && <div className="w-2 h-2 rounded-full bg-pictonBlue"></div>}
          </div>
          <span className="font-semibold text-ebonyClay flex items-center gap-2">
            <CreditCard size={18} className="text-pictonBlue"/> 
            {getCardType(card.card_no)} Kart
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onEdit(card);
          }}
          className="text-xs font-semibold text-pictonBlue hover:text-ebonyClay underline flex items-center gap-1"
        >
          <Edit2 size={12} /> Düzenle
        </button>
      </div>

      <div className="text-sm text-ebonyClay space-y-2 flex-grow">
        <div className="text-xl font-mono tracking-widest bg-mercury/30 p-2 rounded">
          •••• •••• •••• **{lastFourDigits}**
        </div>
        
        <div className="flex items-center justify-between p-1">
            <div className="flex flex-col">
                <span className="text-xs text-silver">Kart Sahibi</span>
                <span className="font-medium text-ebonyClay">{card.name_on_card.toUpperCase()}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-silver">Son Kullanma</span>
                <span className="font-medium text-ebonyClay">
                    {card.expire_month < 10 ? `0${card.expire_month}` : card.expire_month}/{String(card.expire_year).slice(2)}
                </span>
            </div>
        </div>
      </div>


      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
                e.stopPropagation();
                onDelete(card.id);
            }}
            className="text-silver hover:text-burnSienna p-1 rounded bg-white/70"
          >
              <Trash2 size={16} />
          </button>
      </div>
    </div>
  );
}