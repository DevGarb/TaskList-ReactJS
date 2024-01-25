// ContactForm.tsx
import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

interface ContactFormProps {
    tasks: { id: string; name: string }[];
}

const ContactForm: React.FC<ContactFormProps> = ({ tasks }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleAddTask = () => {
        // Lógica para adicionar tarefa ao WhatsApp ou qualquer outra ação necessária
        const formattedTasks = tasks.map((task) => `${task.name}`).join('\n');
        const newTask = '';
        const newMessage = `Sua lista de tarefas:\n\n${formattedTasks}\n${newTask}`;

        // Adicionando o número do WhatsApp e a mensagem no estado
        setMessage(newMessage);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex-wrap form-floating mb-3 mt-3">
                <label className="text-white" htmlFor="phone">Whatsapp:</label>
                <div className="invalid-feedback text-white" data-sb-feedback="phone:required">
                    Digite um número para contato.
                </div>
                <input 
                    required
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(85) 9 9090-9090"
                    data-sb-validations="required"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
            </div>

            {tasks.map((task, index) => (
                <div key={index}>
                    {/* <input
                        className="form-control"
                        type="text"
                        value={task.name}
                        readOnly
                    /> */}
                </div>
            ))}

            <button type="button" onClick={handleAddTask}>
                <WhatsAppButton phoneNumber={phoneNumber} message={message} />
            </button>
        </div>
    );
};

export default ContactForm;