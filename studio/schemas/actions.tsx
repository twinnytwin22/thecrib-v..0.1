

  export function PreDrop(props: any) { 
    return {
      label: 'Pre-Drop',
      onHandle: () => {
        // Here you can perform your actions
        window.alert('👋 This is your collection before it goes live for minting!')
      }    
    } 
  }