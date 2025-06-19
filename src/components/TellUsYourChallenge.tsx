
// export default TellUsYourChallenge;


// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { MessageSquare, Send, Plus, X, Pin } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface ChallengeNote {
//     id: string;
//     text: string;
//     name: string;
//     position: { x: number; y: number };
//     size: 'small' | 'medium' | 'large';
//     category: 'brand' | 'creator' | 'strategy';
//     timestamp: number;
//     rotation: number;
// }

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 260, y: 20 },
//     { x: 500, y: 20 },
//     { x: 20, y: 180 },
//     { x: 260, y: 180 },
//     { x: 500, y: 180 },
//     { x: 140, y: 340 },
//     { x: 380, y: 340 },
// ];

// const initialTexts = [
//     'Brands need creators with true engagement.',
//     'Fair pay for creators is still a myth.',
//     'Proving campaign ROI is tough.',
//     'Creators want transparency in brand deals.',
//     'Brands feel influencer rates are unpredictable.',
//     'We need better analytics for strategies.',
//     'Too many platforms, too little clarity.',
//     'Long-term brand partnerships are rare.',
// ];

// const getRandomRotation = () => Math.floor(Math.random() * 7 - 3);

// const generateInitialNotes = (): ChallengeNote[] => {
//     return initialTexts.map((text, index) => ({
//         id: `note-${index + 1}`,
//         text,
//         name: '',
//         position: fixedPositions[index],
//         size: 'medium',
//         category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
//         timestamp: Date.now(),
//         rotation: getRandomRotation(),
//     }));
// };

// // ✅ Update this URL with your real Apps Script Web App URL
// const submitToGoogleSheets = async (data: any) => {
//     const endpoint = 'https://script.google.com/macros/s/AKfycbyzBlds3fYvQ18cCU8kVFkM7VbsqoUWRmJ99_pa4wzj-vCLb2iLQSfOAyXCicoojn_C/exec';
//     try {
//         const response = await fetch(endpoint, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error('Submission failed:', error);
//         return { success: false };
//     }
// };

// const TellUsYourChallenge = () => {
//     const [notes, setNotes] = useState<ChallengeNote[]>(() => {
//         const saved = localStorage.getItem('challenge-notes');
//         return saved ? JSON.parse(saved) : generateInitialNotes();
//     });

//     const [newChallenge, setNewChallenge] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const { toast } = useToast();

//     useEffect(() => {
//         localStorage.setItem('challenge-notes', JSON.stringify(notes));
//     }, [notes]);

//     const handleSubmitChallenge = async () => {
//         if (!newChallenge.trim()) {
//             toast({ title: 'Please describe your challenge', variant: 'destructive' });
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             await submitToGoogleSheets({
//                 message: newChallenge,
//                 category: selectedCategory,
//                 timestamp: new Date().toISOString(),
//             });

//             const newNote: ChallengeNote = {
//                 id: Date.now().toString(),
//                 text: newChallenge,
//                 name: '',
//                 position: fixedPositions[fixedPositions.length - 1],
//                 size: 'medium',
//                 category: selectedCategory,
//                 timestamp: Date.now(),
//                 rotation: getRandomRotation(),
//             };

//             const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
//                 ...note,
//                 position: fixedPositions[i],
//             }));

//             setNotes(updatedNotes);
//             toast({ title: 'Challenge submitted!' });
//             setNewChallenge('');
//             setShowForm(false);
//         } catch (error) {
//             toast({ title: 'Submission failed', variant: 'destructive' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getCategoryStyle = (category: string) => {
//         switch (category) {
//             case 'brand':
//                 return 'bg-red-100 border-red-200 text-red-800';
//             case 'creator':
//                 return 'bg-pink-100 border-pink-200 text-pink-800';
//             case 'strategy':
//                 return 'bg-rose-200 border-rose-200 text-rose-800';
//             default:
//                 return 'bg-yellow-200 border-yellow-300 text-gray-800';
//         }
//     };

//     return (
//         <section className="py-16 bg-white">
//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                 {/* Left Section */}
//                 <div className="text-left">
//                     <div className="mb-10 max-w-2xl">
//                         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                             Challenge Wall
//                         </h1>

//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
//                             Your Voice. Your Story.{' '}
//                             <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//                                 Our Inspiration.
//                             </span>
//                         </h2>

//                         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                             Whether you're a brand trying to break through the noise, a creator seeking better collaborations, or a strategist navigating shifting trends — your story matters.
//                         </p>
//                     </div>

//                     {!showForm ? (
//                         <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
//                             <Plus className="mr-2 h-5 w-5" /> Add Challenge
//                         </Button>
//                     ) : (
//                         <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
//                                 <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <div className="mb-4">
//                                 <Textarea
//                                     value={newChallenge}
//                                     onChange={(e) =>
//                                         e.target.value.length <= 150 && setNewChallenge(e.target.value)
//                                     }
//                                     placeholder="Describe the challenge..."
//                                     className="w-full rounded-md border border-cherry-200"
//                                     maxLength={150}
//                                 />
//                                 <div className="text-right text-xs text-gray-500 mt-1">
//                                     {newChallenge.length}/150
//                                 </div>
//                             </div>
//                             <div className="flex gap-2 mb-4">
//                                 {(['brand', 'creator', 'strategy'] as const).map((cat) => (
//                                     <Button
//                                         key={cat}
//                                         variant={selectedCategory === cat ? 'default' : 'outline'}
//                                         onClick={() => setSelectedCategory(cat)}
//                                         className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
//                                     >
//                                         {cat}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
//                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                 <Send className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Right Section */}
//                 <div className="relative h-[480px] bg-white">
//                     {notes.map((note) => (
//                         <div
//                             key={note.id}
//                             className={`absolute p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)}`}
//                             style={{
//                                 left: `${note.position.x - 80}px`,
//                                 top: note.position.y,
//                                 width: '220px',
//                                 height: '140px',
//                                 transform: `rotate(${note.rotation}deg)`
//                             }}
//                         >
//                             <div className="relative w-full h-full overflow-hidden">
//                                 <Pin className="absolute top-1 right-1 w-5 h-5 text-red-500 z-10 rotate-[25deg]" />
//                                 <div className="text-xs capitalize font-semibold mb-1">{note.category}</div>
//                                 <div className="text-sm font-medium break-words overflow-hidden max-h-[100px] leading-snug">
//                                     {note.text}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TellUsYourChallenge;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Send, Plus, X } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface ChallengeNote {
//     id: string;
//     text: string;
//     name: string;
//     position: { x: number; y: number };
//     size: 'small' | 'medium' | 'large';
//     category: 'brand' | 'creator' | 'strategy';
//     timestamp: number;
//     rotation: number;
// }

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 260, y: 20 },
//     { x: 500, y: 20 },
//     { x: 20, y: 180 },
//     { x: 260, y: 180 },
//     { x: 500, y: 180 },
//     { x: 140, y: 340 },
//     { x: 380, y: 340 },
// ];

// const initialTexts = [
//     'Fair pay for creators is still a myth.',
//     'Proving campaign ROI is tough.',
//     'Creators want transparency in brand deals.',
//     'Brands feel influencer rates are unpredictable.',
//     'We need better analytics for strategies.',
//     'Too many platforms, too little clarity.',
//     'Long-term brand partnerships are rare.',
//     'great job',
// ];

// const getRandomRotation = () => -3 - Math.floor(Math.random() * 4); // -3 to -6

// const generateInitialNotes = (): ChallengeNote[] => {
//     return initialTexts.map((text, index) => ({
//         id: `note-${index + 1}`,
//         text,
//         name: '',
//         position: fixedPositions[index],
//         size: 'medium',
//         category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
//         timestamp: Date.now(),
//         rotation: getRandomRotation(),
//     }));
// };

// const submitToGoogleSheets = async (data: any) => {
//     const endpoint =
//         'https://script.google.com/macros/s/AKfycbzKPV-4VOYOrD-OFq5Vit4FKMkEoX8uNnNdOuYfHPl_Uk2tXYckj4vPnQ-zc0vpQZgn1w/exec';
//     try {
//         await fetch(endpoint, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return { success: true };
//     } catch (error) {
//         console.error('Submission failed:', error);
//         return { success: false };
//     }
// };

// const TellUsYourChallenge = () => {
//     const [notes, setNotes] = useState<ChallengeNote[]>(() => {
//         const saved = localStorage.getItem('challenge-notes');
//         return saved ? JSON.parse(saved) : generateInitialNotes();
//     });

//     const [newChallenge, setNewChallenge] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const { toast } = useToast();

//     useEffect(() => {
//         localStorage.setItem('challenge-notes', JSON.stringify(notes));
//     }, [notes]);

//     const handleSubmitChallenge = async () => {
//         if (!newChallenge.trim()) {
//             toast({ title: 'Please describe your challenge', variant: 'destructive' });
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const submissionData = {
//                 message: newChallenge,
//                 category: selectedCategory,
//                 timestamp: new Date().toISOString(),
//             };

//             const result = await submitToGoogleSheets(submissionData);

//             if (result.success) {
//                 const newNote: ChallengeNote = {
//                     id: Date.now().toString(),
//                     text: newChallenge,
//                     name: '',
//                     position: fixedPositions[fixedPositions.length - 1],
//                     size: 'medium',
//                     category: selectedCategory,
//                     timestamp: Date.now(),
//                     rotation: getRandomRotation(),
//                 };

//                 const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
//                     ...note,
//                     position: fixedPositions[i],
//                 }));

//                 setNotes(updatedNotes);
//                 toast({ title: 'Challenge submitted successfully!' });
//                 setNewChallenge('');
//                 setShowForm(false);
//             } else {
//                 toast({ title: 'Submission failed', variant: 'destructive' });
//             }
//         } catch (error) {
//             console.error('Error during challenge submission:', error);
//             toast({ title: 'An unexpected error occurred', variant: 'destructive' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getCategoryStyle = (category: string) => {
//         switch (category) {
//             case 'brand':
//                 return 'bg-red-100 border-red-200 text-red-800';
//             case 'creator':
//                 return 'bg-pink-100 border-pink-200 text-pink-800';
//             case 'strategy':
//                 return 'bg-rose-200 border-rose-200 text-rose-800';
//             default:
//                 return 'bg-yellow-200 border-yellow-300 text-gray-800';
//         }
//     };

//     return (
//         <section className="py-16 bg-white">
//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                 {/* Left Section */}
//                 <div className="text-left">
//                     <div className="mb-10 max-w-2xl">
//                         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Challenge Wall</h1>
//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
//                             Your Problems.{' '}
//                             <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//                                 Our Next Big Feature.
//                             </span>
//                         </h2>
//                         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                             Challenge Wall is designed for brands and influencers to share the challenges they face in the influencer
//                             marketing industry. Whether it’s struggling with brand-creator alignment, campaign performance, ROI
//                             tracking, or platform usability — this is your space to speak up.
//                             Your insights help us improve Denvey, shaping better tools and smarter solutions for more impactful
//                             influencer campaigns.
//                             Let’s solve the real problems of influencer marketing — together.
//                         </p>
//                     </div>

//                     {!showForm ? (
//                         <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
//                             <Plus className="mr-2 h-5 w-5" /> Add Challenge
//                         </Button>
//                     ) : (
//                         <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
//                                 <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <div className="mb-4">
//                                 <Textarea
//                                     value={newChallenge}
//                                     onChange={(e) =>
//                                         e.target.value.length <= 150 && setNewChallenge(e.target.value)
//                                     }
//                                     placeholder="Describe the challenge..."
//                                     className="w-full rounded-md border border-cherry-200"
//                                     maxLength={150}
//                                 />
//                                 <div className="text-right text-xs text-gray-500 mt-1">
//                                     {newChallenge.length}/150
//                                 </div>
//                             </div>
//                             <div className="flex gap-2 mb-4 flex-wrap">
//                                 {(['brand', 'creator', 'strategy'] as const).map((cat) => (
//                                     <Button
//                                         key={cat}
//                                         variant={selectedCategory === cat ? 'default' : 'outline'}
//                                         onClick={() => setSelectedCategory(cat)}
//                                         className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
//                                     >
//                                         {cat}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
//                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                 <Send className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Right Section - Challenge Notes */}
//                 <div className="relative w-full sm:w-[500px] md:w-[600px] lg:w-[720px] bg-[#f8f9fa] rounded-xl border border-gray-300 shadow-md p-4 sm:p-6 min-h-[500px] overflow-x-auto">
//                     {notes.map((note) => (
//                         <div
//                             key={note.id}
//                             className={`absolute p-3 sm:p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)} max-w-[90vw] sm:max-w-none`}
//                             style={{
//                                 left: `${note.position.x}px`,
//                                 top: `${note.position.y}px`,
//                                 width: '180px',
//                                 height: '120px',
//                                 transform: `rotate(${note.rotation}deg)`,
//                             }}
//                         >
//                             <div
//                                 className="absolute top-[-2px] right-[-2px] text-xl"
//                                 style={{
//                                     textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//                                     filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))',
//                                     transform: 'rotate(25deg) scale(1.2)',
//                                 }}
//                             >
//                                 📌
//                             </div>
//                             <div className="text-xs font-semibold capitalize mb-1">{note.category}</div>
//                             <div className="text-sm text-gray-800 leading-snug max-h-[100px] overflow-hidden">
//                                 {note.text}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TellUsYourChallenge;
// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Send, Plus, X } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface ChallengeNote {
//     id: string;
//     text: string;
//     name: string;
//     position: { x: number; y: number };
//     size: 'small' | 'medium' | 'large';
//     category: 'brand' | 'creator' | 'strategy';
//     timestamp: number;
//     rotation: number;
// }

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 260, y: 20 },
//     { x: 500, y: 20 },
//     { x: 20, y: 180 },
//     { x: 260, y: 180 },
//     { x: 500, y: 180 },
//     { x: 140, y: 340 },
//     { x: 380, y: 340 },
// ];

// const initialTexts = [
//     'Fair pay for creators is still a myth.',
//     'Proving campaign ROI is tough.',
//     'Creators want transparency in brand deals.',
//     'Brands feel influencer rates are unpredictable.',
//     'We need better analytics for strategies.',
//     'Too many platforms, too little clarity.',
//     'Long-term brand partnerships are rare.',
//     'great job',
// ];

// const getRandomRotation = () => -3 - Math.floor(Math.random() * 4); // -3 to -6

// const generateInitialNotes = (): ChallengeNote[] => {
//     return initialTexts.map((text, index) => ({
//         id: `note-${index + 1}`,
//         text,
//         name: '',
//         position:
//             fixedPositions.length > index
//                 ? fixedPositions[index]
//                 : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//         size: 'medium',
//         category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
//         timestamp: Date.now(),
//         rotation: getRandomRotation(),
//     }));
// };

// const submitToGoogleSheets = async (data: any) => {
//     const endpoint = 'https://script.google.com/macros/s/AKfycbzKPV-4VOYOrD-OFq5Vit4FKMkEoX8uNnNdOuYfHPl_Uk2tXYckj4vPnQ-zc0vpQZgn1w/exec';
//     try {
//         await fetch(endpoint, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return { success: true };
//     } catch (error) {
//         console.error('Submission failed:', error);
//         return { success: false };
//     }
// };

// const TellUsYourChallenge = () => {
//     const [notes, setNotes] = useState<ChallengeNote[]>(() => {
//         const saved = localStorage.getItem('challenge-notes');
//         return saved ? JSON.parse(saved) : generateInitialNotes();
//     });

//     const [newChallenge, setNewChallenge] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const { toast } = useToast();

//     useEffect(() => {
//         localStorage.setItem('challenge-notes', JSON.stringify(notes));
//     }, [notes]);

//     const handleSubmitChallenge = async () => {
//         if (!newChallenge.trim()) {
//             toast({ title: 'Please describe your challenge', variant: 'destructive' });
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const submissionData = {
//                 message: newChallenge,
//                 category: selectedCategory,
//                 timestamp: new Date().toISOString(),
//             };

//             const result = await submitToGoogleSheets(submissionData);

//             if (result.success) {
//                 const newNote: ChallengeNote = {
//                     id: Date.now().toString(),
//                     text: newChallenge,
//                     name: '',
//                     position:
//                         fixedPositions.length > notes.length
//                             ? fixedPositions[notes.length]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                     size: 'medium',
//                     category: selectedCategory,
//                     timestamp: Date.now(),
//                     rotation: getRandomRotation(),
//                 };

//                 const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
//                     ...note,
//                     position:
//                         fixedPositions.length > i
//                             ? fixedPositions[i]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                 }));

//                 setNotes(updatedNotes);
//                 toast({ title: 'Challenge submitted successfully!' });
//                 setNewChallenge('');
//                 setShowForm(false);
//             } else {
//                 toast({ title: 'Submission failed', variant: 'destructive' });
//             }
//         } catch (error) {
//             console.error('Error during challenge submission:', error);
//             toast({ title: 'An unexpected error occurred', variant: 'destructive' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getCategoryStyle = (category: string) => {
//         switch (category) {
//             case 'brand':
//                 return 'bg-red-100 border-red-200 text-red-800';
//             case 'creator':
//                 return 'bg-pink-100 border-pink-200 text-pink-800';
//             case 'strategy':
//                 return 'bg-rose-200 border-rose-200 text-rose-800';
//             default:
//                 return 'bg-yellow-200 border-yellow-300 text-gray-800';
//         }
//     };

//     return (
//         <section className="py-16 bg-white">
//             {/* Responsive fix for notes and pins */}
//             <style>{`
//                 @media (max-width: 1024px) {
//                     .relative.w-\\[720px\\] {
//                         width: 100% !important;
//                         padding-bottom: 200px;
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                         gap: 20px;
//                     }
//                     .challenge-note {
//                         position: relative !important;
//                         transform: none !important;
//                         width: 90% !important;
//                         max-width: 300px;
//                         margin: 0 auto;
//                         top: auto !important;
//                         left: auto !important;
//                     }
//                     .challenge-note img {
//                         top: -10px !important;
//                         right: -10px !important;
//                     }
//                 }
//             `}</style>

//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                 {/* Left column */}
//                 <div className="text-left">
//                     <div className="mb-10 max-w-2xl">
//                         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Challenge Wall</h1>
//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
//                             Your Problems.{' '}
//                             <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//                                 Our Next Big Feature.
//                             </span>
//                         </h2>
//                         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                             Challenge Wall is designed for brands and influencers to share the challenges they face in the influencer marketing industry.
//                             Whether it’s struggling with brand-creator alignment, campaign performance, ROI tracking, or platform usability — this is your space to speak up.
//                             Your insights help us improve Denvey, shaping better tools and smarter solutions for more impactful influencer campaigns.
//                             Let’s solve the real problems of influencer marketing — together.
//                         </p>
//                     </div>

//                     {!showForm ? (
//                         <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
//                             <Plus className="mr-2 h-5 w-5" /> Add Challenge
//                         </Button>
//                     ) : (
//                         <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
//                                 <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <div className="mb-4">
//                                 <Textarea
//                                     value={newChallenge}
//                                     onChange={(e) => e.target.value.length <= 150 && setNewChallenge(e.target.value)}
//                                     placeholder="Describe the challenge..."
//                                     className="w-full rounded-md border border-cherry-200"
//                                     maxLength={150}
//                                 />
//                                 <div className="text-right text-xs text-gray-500 mt-1">{newChallenge.length}/150</div>
//                             </div>
//                             <div className="flex gap-2 mb-4">
//                                 {(['brand', 'creator', 'strategy'] as const).map((cat) => (
//                                     <Button
//                                         key={cat}
//                                         variant={selectedCategory === cat ? 'default' : 'outline'}
//                                         onClick={() => setSelectedCategory(cat)}
//                                         className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
//                                     >
//                                         {cat}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
//                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                 <Send className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Right column: Challenge Notes Wall */}
//                 <div className="relative w-[720px] bg-[#f8f9fa] rounded-xl border border-gray-300 shadow-md p-6 min-h-[500px]">
//                     {notes.map((note) => (
//                         <div
//                             key={note.id}
//                             className={`challenge-note absolute p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)}`}
//                             style={{
//                                 left: `${note.position.x}px`,
//                                 top: `${note.position.y}px`,
//                                 width: '200px',
//                                 height: '130px',
//                                 transform: `rotate(${note.rotation}deg)`,
//                             }}
//                         >
//                             <img
//                                 src="/lovable-uploads/pin-removebg-preview.png"
//                                 alt="Pin"
//                                 className="absolute -top-0.5 -right-0 w-6 h-6 z-10"
//                                 style={{
//                                     transform: 'rotate(-5deg) scale(1.2)',
//                                     filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.4))',
//                                 }}
//                             />
//                             <div className="text-xs font-semibold capitalize mb-1">{note.category}</div>
//                             <div className="text-sm text-gray-800 leading-snug max-h-[100px] overflow-hidden">{note.text}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TellUsYourChallenge;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Send, Plus, X } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface ChallengeNote {
//     id: string;
//     text: string;
//     name: string;
//     position: { x: number; y: number };
//     size: 'small' | 'medium' | 'large';
//     category: 'brand' | 'creator' | 'strategy';
//     timestamp: number;
//     rotation: number;
// }

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 260, y: 20 },
//     { x: 500, y: 20 },
//     { x: 20, y: 180 },
//     { x: 260, y: 180 },
//     { x: 500, y: 180 },
//     { x: 140, y: 340 },
//     { x: 380, y: 340 },
// ];

// const initialTexts = [
//     'Fair pay for creators is still a myth.',
//     'Proving campaign ROI is tough.',
//     'Creators want transparency in brand deals.',
//     'Brands feel influencer rates are unpredictable.',
//     'We need better analytics for strategies.',
//     'Too many platforms, too little clarity.',
//     'Long-term brand partnerships are rare.',
//     'great job',
// ];

// const getRandomRotation = () => -3 - Math.floor(Math.random() * 4); // -3 to -6

// const generateInitialNotes = (): ChallengeNote[] => {
//     return initialTexts.map((text, index) => ({
//         id: `note-${index + 1}`,
//         text,
//         name: '',
//         position:
//             fixedPositions.length > index
//                 ? fixedPositions[index]
//                 : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//         size: 'medium',
//         category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
//         timestamp: Date.now(),
//         rotation: getRandomRotation(),
//     }));
// };

// const submitToGoogleSheets = async (data: any) => {
//     const endpoint = 'https://script.google.com/macros/s/AKfycbzKPV-4VOYOrD-OFq5Vit4FKMkEoX8uNnNdOuYfHPl_Uk2tXYckj4vPnQ-zc0vpQZgn1w/exec';
//     try {
//         await fetch(endpoint, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return { success: true };
//     } catch (error) {
//         console.error('Submission failed:', error);
//         return { success: false };
//     }
// };

// const TellUsYourChallenge = () => {
//     const [notes, setNotes] = useState<ChallengeNote[]>(() => {
//         const saved = localStorage.getItem('challenge-notes');
//         return saved ? JSON.parse(saved) : generateInitialNotes();
//     });

//     const [newChallenge, setNewChallenge] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const { toast } = useToast();

//     useEffect(() => {
//         localStorage.setItem('challenge-notes', JSON.stringify(notes));
//     }, [notes]);

//     const handleSubmitChallenge = async () => {
//         if (!newChallenge.trim()) {
//             toast({ title: 'Please describe your challenge', variant: 'destructive' });
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const submissionData = {
//                 message: newChallenge,
//                 category: selectedCategory,
//                 timestamp: new Date().toISOString(),
//             };

//             const result = await submitToGoogleSheets(submissionData);

//             if (result.success) {
//                 const newNote: ChallengeNote = {
//                     id: Date.now().toString(),
//                     text: newChallenge,
//                     name: '',
//                     position:
//                         fixedPositions.length > notes.length
//                             ? fixedPositions[notes.length]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                     size: 'medium',
//                     category: selectedCategory,
//                     timestamp: Date.now(),
//                     rotation: getRandomRotation(),
//                 };

//                 const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
//                     ...note,
//                     position:
//                         fixedPositions.length > i
//                             ? fixedPositions[i]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                 }));

//                 setNotes(updatedNotes);
//                 toast({ title: 'Challenge submitted successfully!' });
//                 setNewChallenge('');
//                 setShowForm(false);
//             } else {
//                 toast({ title: 'Submission failed', variant: 'destructive' });
//             }
//         } catch (error) {
//             console.error('Error during challenge submission:', error);
//             toast({ title: 'An unexpected error occurred', variant: 'destructive' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getCategoryStyle = (category: string) => {
//         switch (category) {
//             case 'brand':
//                 return 'bg-red-100 border-red-200 text-red-800';
//             case 'creator':
//                 return 'bg-pink-100 border-pink-200 text-pink-800';
//             case 'strategy':
//                 return 'bg-rose-200 border-rose-200 text-rose-800';
//             default:
//                 return 'bg-yellow-200 border-yellow-300 text-gray-800';
//         }
//     };

//     return (
//         <section className="py-16 bg-white">
//             <style>{`
//                 @media (max-width: 1024px) {
//                 .container.lg\\:grid-cols-2 {
//                     grid-template-columns: 1fr;
//                 }
//                 .relative.w-\\[720px\\] {
//                     width: 100% !important;
//                     min-height: auto !important;
//                     margin-top: 40px;
//                     padding-bottom: 200px;
//                 }
//                 .challenge-note {
//                     position: relative !important;
//                     width: 48% !important;
//                     max-width: 300px;
//                     margin: 10px 1%;
//                     display: inline-block;
//                     vertical-align: top;
//                     left: auto !important;
//                     top: auto !important;
//                 }
//                 }
//             `}</style>

//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                 <div className="text-left">
//                     <div className="mb-10 max-w-2xl">
//                         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Challenge Wall</h1>
//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
//                             Your Problems.{' '}
//                             <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//                                 Our Next Big Feature.
//                             </span>
//                         </h2>
//                         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                             Challenge Wall is designed for brands and influencers to share the challenges they face in the influencer marketing industry.
//                             Whether it’s struggling with brand-creator alignment, campaign performance, ROI tracking, or platform usability — this is your space to speak up.
//                             Your insights help us improve Denvey, shaping better tools and smarter solutions for more impactful influencer campaigns.
//                             Let’s solve the real problems of influencer marketing — together.
//                         </p>
//                     </div>

//                     {!showForm ? (
//                         <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
//                             <Plus className="mr-2 h-5 w-5" /> Add Challenge
//                         </Button>
//                     ) : (
//                         <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
//                                 <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <div className="mb-4">
//                                 <Textarea
//                                     value={newChallenge}
//                                     onChange={(e) => e.target.value.length <= 150 && setNewChallenge(e.target.value)}
//                                     placeholder="Describe the challenge..."
//                                     className="w-full rounded-md border border-cherry-200"
//                                     maxLength={150}
//                                 />
//                                 <div className="text-right text-xs text-gray-500 mt-1">{newChallenge.length}/150</div>
//                             </div>
//                             <div className="flex gap-2 mb-4">
//                                 {(['brand', 'creator', 'strategy'] as const).map((cat) => (
//                                     <Button
//                                         key={cat}
//                                         variant={selectedCategory === cat ? 'default' : 'outline'}
//                                         onClick={() => setSelectedCategory(cat)}
//                                         className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
//                                     >
//                                         {cat}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
//                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                 <Send className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Challenge Notes Wall */}
//                 <div className="relative w-[720px] bg-[#f8f9fa] rounded-xl border border-gray-300 shadow-md p-6 min-h-[500px] challenge-note-wall ">
//                     {notes.map((note) => (
//                         <div
//                             key={note.id}
//                             className={`challenge-note absolute p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)}`}
//                             style={{
//                                 left: `${note.position.x}px`,
//                                 top: `${note.position.y}px`,
//                                 width: '200px',
//                                 height: '130px',
//                                 transform: `rotate(${note.rotation}deg)`,
//                             }}
//                         >
//                             <img
//                                 src="/lovable-uploads/pin-removebg-preview.png"
//                                 alt="Pin"
//                                 className="absolute -top-0.3 -right-0 w-6 h-6 z-10"
//                                 style={{
//                                     transform: 'rotate(-5deg) scale(1.2)',
//                                     filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.4))',
//                                 }}
//                             />
//                             <div className="text-xs font-semibold capitalize mb-1">{note.category}</div>
//                             <div className="text-sm text-gray-800 leading-snug max-h-[100px] overflow-hidden">{note.text}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TellUsYourChallenge;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ChallengeNote {
    id: string;
    text: string;
    name: string;
    position: { x: number; y: number };
    size: 'small' | 'medium' | 'large';
    category: 'brand' | 'creator' | 'strategy';
    timestamp: number;
    rotation: number;
}

const fixedPositions = [
    { x: 30, y: 20 },
    { x: 230, y: 20 },
    { x: 420, y: 20 },
    { x: 30, y: 180 },
    { x: 230, y: 180 },
    { x: 420, y: 180 },
    { x: 140, y: 340 },
    { x: 350, y: 340 },
];
// const fixedPositions = [
//     { x: 60, y: 20 },   // was 20 → moved right
//     { x: 170, y: 20 },  // was 190 → moved left
//     { x: 300, y: 20 },  // was 360 → moved left more
//     { x: 60, y: 140 },  // was 20 → moved right
//     { x: 170, y: 140 }, // was 190 → moved left
//     { x: 300, y: 140 }, // was 360 → moved left more
//     { x: 120, y: 260 }, // was 105 → slight right
//     { x: 250, y: 260 }, // was 275 → slight left
// ];

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 190, y: 20 },
//     { x: 360, y: 20 },
//     { x: 20, y: 140 },
//     { x: 190, y: 140 },
//     { x: 360, y: 140 },
//     { x: 105, y: 260 },
//     { x: 275, y: 260 },
// ];

const initialTexts = [
    'Fair pay for creators is still a myth.',
    'Proving campaign ROI is tough.',
    'Creators want transparency in brand deals.',
    'Brands feel influencer rates are unpredictable.',
    'We need better analytics for strategies.',
    'Too many platforms, too little clarity.',
    'Long-term brand partnerships are rare.',
    'great job',
];

const getRandomRotation = () => -3 - Math.floor(Math.random() * 4); // -3 to -6

const generateInitialNotes = (): ChallengeNote[] => {
    return initialTexts.map((text, index) => ({
        id: `note-${index + 1}`,
        text,
        name: '',
        position:
            fixedPositions.length > index
                ? fixedPositions[index]
                : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
        size: 'medium',
        category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
        timestamp: Date.now(),
        rotation: getRandomRotation(),
    }));
};

const submitToGoogleSheets = async (data: any) => {
    const endpoint = 'https://script.google.com/macros/s/AKfycbzKPV-4VOYOrD-OFq5Vit4FKMkEoX8uNnNdOuYfHPl_Uk2tXYckj4vPnQ-zc0vpQZgn1w/exec';
    try {
        await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return { success: true };
    } catch (error) {
        console.error('Submission failed:', error);
        return { success: false };
    }
};

const TellUsYourChallenge = () => {
    const [notes, setNotes] = useState<ChallengeNote[]>(() => {
        const saved = localStorage.getItem('challenge-notes');
        return saved ? JSON.parse(saved) : generateInitialNotes();
    });

    const [newChallenge, setNewChallenge] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        localStorage.setItem('challenge-notes', JSON.stringify(notes));
    }, [notes]);

    const handleSubmitChallenge = async () => {
        if (!newChallenge.trim()) {
            toast({ title: 'Please describe your challenge', variant: 'destructive' });
            return;
        }

        setIsSubmitting(true);
        try {
            const submissionData = {
                message: newChallenge,
                category: selectedCategory,
                timestamp: new Date().toISOString(),
            };

            const result = await submitToGoogleSheets(submissionData);

            if (result.success) {
                const newNote: ChallengeNote = {
                    id: Date.now().toString(),
                    text: newChallenge,
                    name: '',
                    position:
                        fixedPositions.length > notes.length
                            ? fixedPositions[notes.length]
                            : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
                    size: 'medium',
                    category: selectedCategory,
                    timestamp: Date.now(),
                    rotation: getRandomRotation(),
                };

                const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
                    ...note,
                    position:
                        fixedPositions.length > i
                            ? fixedPositions[i]
                            : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
                }));

                setNotes(updatedNotes);
                toast({ title: 'Challenge submitted successfully!' });
                setNewChallenge('');
                setShowForm(false);
            } else {
                toast({ title: 'Submission failed', variant: 'destructive' });
            }
        } catch (error) {
            console.error('Error during challenge submission:', error);
            toast({ title: 'An unexpected error occurred', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getCategoryStyle = (category: string) => {
        switch (category) {
            case 'brand':
                return 'bg-red-100 border-red-200 text-red-800';
            case 'creator':
                return 'bg-pink-100 border-pink-200 text-pink-800';
            case 'strategy':
                return 'bg-rose-200 border-rose-200 text-rose-800';
            default:
                return 'bg-yellow-200 border-yellow-300 text-gray-800';
        }
    };

    return (
        <section className="py-16 bg-white overflow-x-hidden">

            <style>{`
        @media (max-width: 1024px) and (min-width: 640px) {
          .challenge-note-wall {
            width: 95% !important;
            padding: 16px !important;
            min-height: auto !important;
            margin: auto;
          }
          .challenge-note {
            position: relative !important;
            width: 48% !important;
            max-width: 300px;
            margin: 6px 1%;
            display: inline-block;
            vertical-align: top;
            left: auto !important;
            top: auto !important;
          }
        }

        @media (max-width: 640px) {
          .challenge-note-wall {
            width: 100% !important;
            padding: 12px !important;
            margin-top: 24px;
          }
          .challenge-note {
            width: 100% !important;
            margin: 12px 0;
            left: auto !important;
            top: auto !important;
            position: relative !important;
          }
        }
      `}</style>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                {/* ✅ LEFT SECTION */}
                <div className="text-left sm:text-center sm:mx-auto sm:max-w-xl lg:text-left lg:mx-0">

                    <div className="mb-10">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Challenge Wall</h1>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
                            Your Problems.{' '}
                            <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Our Next Big Feature.
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Challenge Wall is designed for brands and influencers to share the challenges they face in the influencer marketing industry.
                            Whether it’s struggling with brand-creator alignment, campaign performance, ROI tracking, or platform usability — this is your space to speak up.
                            Your insights help us improve Denvey, shaping better tools and smarter solutions for more impactful influencer campaigns.
                            Let’s solve the real problems of influencer marketing — together.
                        </p>
                    </div>

                    {!showForm ? (
                        <div className="md:flex md:justify-center">
                            <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
                                <Plus className="mr-2 h-5 w-5" /> Add Challenge
                            </Button>
                        </div>
                    ) : (
                        <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl mx-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
                                <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="mb-4">
                                <Textarea
                                    value={newChallenge}
                                    onChange={(e) => e.target.value.length <= 150 && setNewChallenge(e.target.value)}
                                    placeholder="Describe the challenge..."
                                    className="w-full rounded-md border border-cherry-200"
                                    maxLength={150}
                                />
                                <div className="text-right text-xs text-gray-500 mt-1">{newChallenge.length}/150</div>
                            </div>
                            <div className="flex gap-2 mb-4 justify-start sm:justify-center lg:justify-start">
                                {(['brand', 'creator', 'strategy'] as const).map((cat) => (
                                    <Button
                                        key={cat}
                                        variant={selectedCategory === cat ? 'default' : 'outline'}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                            <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* ✅ RIGHT SECTION */}
                <div className="relative w-full max-w-[720px] bg-[#f8f9fa] rounded-xl border border-gray-300 shadow-md p-6 min-h-[500px] challenge-note-wall overflow-hidden">

                    {notes.map((note) => (
                        <div
                            key={note.id}
                            className={`challenge-note absolute p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)}`}
                            style={{
                                left: `${note.position.x - 10}px`,
                                top: `${note.position.y}px`,
                                width: '150px',
                                height: '100px',
                                transform: `rotate(${note.rotation}deg)`,
                            }}
                        >
                            <img
                                src="/lovable-uploads/pin-removebg-preview.png"
                                alt="Pin"
                                className="absolute -top-0.3 -right-0 w-5 h-5 z-10"
                                style={{
                                    transform: 'rotate(-5deg) scale(1.2)',
                                    filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.4))',
                                }}
                            />
                            <div className="text-xs font-semibold capitalize mb-1">{note.category}</div>
                            <div className="text-sm text-gray-800 leading-snug max-h-[100px] overflow-hidden">{note.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TellUsYourChallenge;



// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Send, Plus, X } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface ChallengeNote {
//     id: string;
//     text: string;
//     name: string;
//     position: { x: number; y: number };
//     size: 'small' | 'medium' | 'large';
//     category: 'brand' | 'creator' | 'strategy';
//     timestamp: number;
//     rotation: number;
// }

// const fixedPositions = [
//     { x: 20, y: 20 },
//     { x: 260, y: 20 },
//     { x: 500, y: 20 },
//     { x: 20, y: 180 },
//     { x: 260, y: 180 },
//     { x: 500, y: 180 },
//     { x: 140, y: 340 },
//     { x: 380, y: 340 },
// ];

// const initialTexts = [
//     'Fair pay for creators is still a myth.',
//     'Proving campaign ROI is tough.',
//     'Creators want transparency in brand deals.',
//     'Brands feel influencer rates are unpredictable.',
//     'We need better analytics for strategies.',
//     'Too many platforms, too little clarity.',
//     'Long-term brand partnerships are rare.',
//     'great job',
// ];

// const getRandomRotation = () => -3 - Math.floor(Math.random() * 4); // -3 to -6

// const generateInitialNotes = (): ChallengeNote[] => {
//     return initialTexts.map((text, index) => ({
//         id: `note-${index + 1}`,
//         text,
//         name: '',
//         position:
//             fixedPositions.length > index
//                 ? fixedPositions[index]
//                 : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//         size: 'medium',
//         category: ['brand', 'creator', 'strategy'][index % 3] as 'brand' | 'creator' | 'strategy',
//         timestamp: Date.now(),
//         rotation: getRandomRotation(),
//     }));
// };

// const submitToGoogleSheets = async (data: any) => {
//     const endpoint = 'https://script.google.com/macros/s/AKfycbzKPV-4VOYOrD-OFq5Vit4FKMkEoX8uNnNdOuYfHPl_Uk2tXYckj4vPnQ-zc0vpQZgn1w/exec';
//     try {
//         await fetch(endpoint, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return { success: true };
//     } catch (error) {
//         console.error('Submission failed:', error);
//         return { success: false };
//     }
// };

// const TellUsYourChallenge = () => {
//     const [notes, setNotes] = useState<ChallengeNote[]>(() => {
//         const saved = localStorage.getItem('challenge-notes');
//         return saved ? JSON.parse(saved) : generateInitialNotes();
//     });

//     const [newChallenge, setNewChallenge] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState<'brand' | 'creator' | 'strategy'>('brand');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const { toast } = useToast();

//     useEffect(() => {
//         localStorage.setItem('challenge-notes', JSON.stringify(notes));
//     }, [notes]);

//     const handleSubmitChallenge = async () => {
//         if (!newChallenge.trim()) {
//             toast({ title: 'Please describe your challenge', variant: 'destructive' });
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const submissionData = {
//                 message: newChallenge,
//                 category: selectedCategory,
//                 timestamp: new Date().toISOString(),
//             };

//             const result = await submitToGoogleSheets(submissionData);

//             if (result.success) {
//                 const newNote: ChallengeNote = {
//                     id: Date.now().toString(),
//                     text: newChallenge,
//                     name: '',
//                     position:
//                         fixedPositions.length > notes.length
//                             ? fixedPositions[notes.length]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                     size: 'medium',
//                     category: selectedCategory,
//                     timestamp: Date.now(),
//                     rotation: getRandomRotation(),
//                 };

//                 const updatedNotes = [...notes.slice(1), newNote].map((note, i) => ({
//                     ...note,
//                     position:
//                         fixedPositions.length > i
//                             ? fixedPositions[i]
//                             : { x: Math.random() * 600 + 50, y: Math.random() * 300 + 50 },
//                 }));

//                 setNotes(updatedNotes);
//                 toast({ title: 'Challenge submitted successfully!' });
//                 setNewChallenge('');
//                 setShowForm(false);
//             } else {
//                 toast({ title: 'Submission failed', variant: 'destructive' });
//             }
//         } catch (error) {
//             console.error('Error during challenge submission:', error);
//             toast({ title: 'An unexpected error occurred', variant: 'destructive' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getCategoryStyle = (category: string) => {
//         switch (category) {
//             case 'brand':
//                 return 'bg-red-100 border-red-200 text-red-800';
//             case 'creator':
//                 return 'bg-pink-100 border-pink-200 text-pink-800';
//             case 'strategy':
//                 return 'bg-rose-200 border-rose-200 text-rose-800';
//             default:
//                 return 'bg-yellow-200 border-yellow-300 text-gray-800';
//         }
//     };

//     return (
//         <section className="py-16 bg-white">
//             <style>{`
//         @media (max-width: 1024px) {
//           .container.lg\\:grid-cols-2 {
//             grid-template-columns: 1fr;
//           }
//           .relative.w-\\[720px\\] {
//             width: 100% !important;
//             min-height: auto !important;
//             margin-top: 40px;
//             padding-bottom: 200px;
//           }
//           .challenge-note {
//             position: static !important;
//             transform: none !important;
//             margin-bottom: 20px;
//             width: 90% !important;
//             max-width: 300px;
//             margin-left: auto;
//             margin-right: auto;
//             left: auto !important;
//             top: auto !important;
//           }
//         }
//       `}</style>

//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                 <div className="text-left">
//                     <div className="mb-10 max-w-2xl">
//                         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Challenge Wall</h1>
//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
//                             Your Problems.{' '}
//                             <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//                                 Our Next Big Feature.
//                             </span>
//                         </h2>
//                         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
//                             Challenge Wall is designed for brands and influencers to share the challenges they face in the influencer marketing industry.
//                             Whether it’s struggling with brand-creator alignment, campaign performance, ROI tracking, or platform usability — this is your space to speak up.
//                             Your insights help us improve Denvey, shaping better tools and smarter solutions for more impactful influencer campaigns.
//                             Let’s solve the real problems of influencer marketing — together.
//                         </p>
//                     </div>

//                     {!showForm ? (
//                         <Button onClick={() => setShowForm(true)} className="bg-cherry-600 text-white px-6 py-3 rounded-xl shadow-lg">
//                             <Plus className="mr-2 h-5 w-5" /> Add Challenge
//                         </Button>
//                     ) : (
//                         <div className="bg-white border border-cherry-200 rounded-xl p-6 shadow-xl max-w-xl">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="font-semibold text-cherry-700">Your Challenge</h3>
//                                 <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <div className="mb-4">
//                                 <Textarea
//                                     value={newChallenge}
//                                     onChange={(e) => e.target.value.length <= 150 && setNewChallenge(e.target.value)}
//                                     placeholder="Describe the challenge..."
//                                     className="w-full rounded-md border border-cherry-200"
//                                     maxLength={150}
//                                 />
//                                 <div className="text-right text-xs text-gray-500 mt-1">{newChallenge.length}/150</div>
//                             </div>
//                             <div className="flex gap-2 mb-4">
//                                 {(['brand', 'creator', 'strategy'] as const).map((cat) => (
//                                     <Button
//                                         key={cat}
//                                         variant={selectedCategory === cat ? 'default' : 'outline'}
//                                         onClick={() => setSelectedCategory(cat)}
//                                         className={selectedCategory === cat ? 'bg-cherry-600 text-white' : 'text-gray-700'}
//                                     >
//                                         {cat}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <Button onClick={handleSubmitChallenge} disabled={isSubmitting} className="bg-cherry-600 text-white w-full">
//                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                 <Send className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Challenge Notes Wall */}
//                 <div className="relative w-[720px] bg-[#f8f9fa] rounded-xl border border-gray-300 shadow-md p-6 min-h-[500px]">
//                     {notes.map((note) => (
//                         <div
//                             key={note.id}
//                             className={`challenge-note absolute p-4 rounded-lg shadow-md border transition-all duration-500 overflow-hidden ${getCategoryStyle(note.category)}`}
//                             style={{
//                                 left: `${note.position.x}px`,
//                                 top: `${note.position.y}px`,
//                                 width: '200px',
//                                 height: '130px',
//                                 transform: `rotate(${note.rotation}deg)`,
//                             }}
//                         >
//                             {/* 3D Pin Image */}
//                             <img
//                                 src="denvey-digital-canvas-main/public/lovable-uploads/images-removebg-preview.png"
//                                 alt="3D pin"
//                                 className="absolute -top-3 -right-3 w-8 h-8 rotate-[12deg] drop-shadow-[2px_2px_1px_rgba(0,0,0,0.3)]"
//                             />

//                             <div className="text-xs font-semibold capitalize mb-1">{note.category}</div>
//                             <div className="text-sm text-gray-800 leading-snug max-h-[100px] overflow-hidden">{note.text}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TellUsYourChallenge;
