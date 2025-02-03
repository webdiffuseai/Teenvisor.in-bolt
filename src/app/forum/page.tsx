'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Thread {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  likes: number;
  createdAt: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  likes: number;
}

export default function ForumPage() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [newComment, setNewComment] = useState('');
  const [newThread, setNewThread] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleCreateThread = () => {
    const thread: Thread = {
      id: Date.now(),
      title: newThread.title,
      content: newThread.content,
      author: {
        name: 'Current User', // Replace with actual user data
        avatar: '/default-avatar.png'
      },
      tags: newThread.tags.split(',').map(tag => tag.trim()),
      likes: 0,
      createdAt: new Date().toISOString(),
      comments: []
    };
    
    setThreads([thread, ...threads]);
    setNewThread({ title: '', content: '', tags: '' });
    setShowNewThreadModal(false);
  };

  const handleAddComment = (threadId: number) => {
    if (!newComment.trim()) return;

    const updatedThreads = threads.map(thread => {
      if (thread.id === threadId) {
        return {
          ...thread,
          comments: [...thread.comments, {
            id: Date.now(),
            content: newComment,
            author: {
              name: 'Current User', // Replace with actual user data
              avatar: '/default-avatar.png'
            },
            createdAt: new Date().toISOString(),
            likes: 0
          }]
        };
      }
      return thread;
    });

    setThreads(updatedThreads);
    setNewComment('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-theme-orange">Community Forum</h1>
        <button 
          onClick={() => setShowNewThreadModal(true)}
          className="bg-theme-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Start New Thread
        </button>
      </div>

      {/* Thread List */}
      <div className="space-y-6">
        {threads.map(thread => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <img 
                src={thread.author.avatar} 
                alt={thread.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{thread.title}</h3>
                <p className="text-gray-300 mt-2">{thread.content}</p>
                <div className="flex gap-2 mt-4">
                  {thread.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Comments Section */}
                <div className="mt-6 space-y-4">
                  {thread.comments.map(comment => (
                    <div key={comment.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{comment.author.name}</span>
                      </div>
                      <p className="mt-2 text-gray-300">{comment.content}</p>
                    </div>
                  ))}

                  {/* Add Comment */}
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 bg-gray-700 rounded-lg px-4 py-2"
                    />
                    <button
                      onClick={() => handleAddComment(thread.id)}
                      className="bg-theme-orange px-4 py-2 rounded-lg"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Thread Modal */}
      {showNewThreadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Create New Thread</h2>
            <input
              type="text"
              placeholder="Thread Title"
              value={newThread.title}
              onChange={(e) => setNewThread({...newThread, title: e.target.value})}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 mb-4"
            />
            <textarea
              placeholder="Thread Content"
              value={newThread.content}
              onChange={(e) => setNewThread({...newThread, content: e.target.value})}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 mb-4 h-32"
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              value={newThread.tags}
              onChange={(e) => setNewThread({...newThread, tags: e.target.value})}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowNewThreadModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateThread}
                className="px-4 py-2 rounded-lg bg-theme-orange"
              >
                Create Thread
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
