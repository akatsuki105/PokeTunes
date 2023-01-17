import { Item } from './types';

export type PouchName = 'items' | 'balls' | 'keyItems' | 'tmhm';

export type Pouch = {
  name: PouchName;
  capacity: number;
  items: Item[];
  noItem: Item;
};

export const Pouch = (name: PouchName, content: Item[], noItem: Item): Pouch => {
  return {
    name,
    capacity: content.length,
    items: content,
    noItem,
  };
};

export const PouchGB = (name: PouchName, capacity: number): Pouch => {
  return Pouch(name, [...Array(capacity)].fill([0xFF, 0xFF]), [0xFF, 0xFF]);
};

export const PouchGBA = (name: PouchName, capacity: number): Pouch => {
  return Pouch(name, [...Array(capacity)].fill([0x00, 0x00]), [0x00, 0x00]);
};

export const editPouch = (p: Pouch, idx: number, newItem: Item): Pouch => {
  const none: Item = [...p.noItem];
  const oldItems = [...p.items];
  oldItems[idx] = newItem;

  const newItems = oldItems.filter(([id, amount]) => {
    return id !== none[0] && amount > 0;
  });
  while (newItems.length < p.capacity) {
    newItems.push(none);
  }

  return {
    ...p,
    items: newItems,
  };
};

export const getItems = (p: Pouch): Item[] => {
  const none: Item = [...p.noItem];
  const items: Item[] = p.items.map(([id, amount]) => {
    if (id === 0) return [0, 0];
    if (id === none[0]) return [0, 0];
    if (amount === 0) return [0, 0];
    return [id, amount];
  });
  return items;
};
