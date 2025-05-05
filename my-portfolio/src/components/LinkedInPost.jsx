const LinkedInPost = ({ urn }) => {
  const src = `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(
    urn
  )}`;

  return (
    <div
      style={{
        width: '100%',
        height: '600px',           // ↑ makes it taller
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
    >
      <iframe
        src={src}
        title="LinkedIn post"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default LinkedInPost;
